module Api
  module V1
    class NewsapisController < ApplicationController
      require 'news-api'
      def index
        keyword = params["0"]
        newsapi = News.new(ENV["API_KEY_NEWS"])
        newsapi_data = newsapi.get_everything(q: keyword)

        render json: { "newsApiData" => newsapi_data }
      end
    end
  end
end
