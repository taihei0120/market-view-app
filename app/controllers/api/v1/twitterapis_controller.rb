module Api
  module V1
    class TwitterapisController < ApplicationController
      require 'twitter'
      def index
        client = Twitter::REST::Client.new do |config|
          # config.consumer_key    = ENV["API_KEY_TW"]
          # config.consumer_secret = ENV["API_KEY_TW_SECRET"]
          config.consumer_key    = "04ctqlivqIjNGRP8awg1vBogT"
          config.consumer_secret = "cigo6abMyYT9lYH2ZGeIKr5pBWWNS1MRXQZbEwGYkRlwFSz9Zy"
        end

        keyword = params["0"]
        tweets = client.search(keyword, count: 10, result_type: "recent", exclude: "retweets").take(6).collect do |tweet|
          {
            "id": "#{tweet.id}",
            "date": "#{tweet.created_at}",
            "image": "#{tweet.user.profile_image_url.to_s.sub('http', 'https')}",
            "screen_name": "#{tweet.user.screen_name}",
            "text": "#{tweet.full_text}"
          }
        end
        render json: { "tweets" => tweets }
      end
    end
  end
end
