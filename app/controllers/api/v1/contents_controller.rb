module Api
  module V1
    class ContentsController < ApplicationController
  
      require 'news-api'
      require 'twitter'
      require 'alphavantagerb'
      
      def index
        ## NewsAPI
        newsapi = News.new(ENV["API_KEY_NEWS"])
        contents = newsapi.get_everything(domains: "bloomberg.com, reuters.com, wsj.com")

        ## TwitterAPI
        client = Twitter::REST::Client.new do |config|
          config.consumer_key    = ENV["API_KEY_TW"]
          config.consumer_secret = ENV["API_KEY_TW_SECRET"]
        end
        tweets = client.search("from:elerianm OR from:PIMCO OR from:nntaleb", count: 10, result_type: "recent", exclude: "retweets").take(12).collect do |tweet|
          {
            "id": "#{tweet.id}",
            "date": "#{tweet.created_at}",
            "image": "#{tweet.user.profile_image_url.to_s.sub('http', 'https')}",
            "screen_name": "#{tweet.user.screen_name}",
            "text": "#{tweet.full_text}"
          }
        end

        ## ChartAPI
        exchange_timeseries = Alphavantage::Exchange_Timeseries.new from: "USD", to: "JPY", key: ENV["API_KEY_ALPHA"], type: "daily", outputsize: "full"

        fx_open = exchange_timeseries.open("asc") #始値
        fx_close = exchange_timeseries.close("asc") #終値
        fx_high = exchange_timeseries.high("asc") #高値
        fx_low = exchange_timeseries.low("asc") #安値
    
        fx_time = fx_open.transpose[0]
        fx_price_open = fx_open.transpose[1] #始値
        fx_price_close = fx_close.transpose[1] #終値
        fx_price_high = fx_high.transpose[1] #高値
        fx_price_low = fx_low.transpose[1] #安値

        render json: { "tweets" => tweets, "contents" => contents, "fxTime" => fx_time, "fxPriceOpen" => fx_price_open, "fxPriceClose" => fx_price_close, "fxPriceHigh" => fx_price_high, "fxPriceLow" => fx_price_low }
      end

    end  
  end
end
