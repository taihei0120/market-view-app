FROM ruby:2.6.5
RUN apt-get update -y -qq && apt-get install -y -qq build-essential libpq-dev nodejs libmagickwand-dev yarn

RUN mkdir /myapp
WORKDIR /myapp

COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock

RUN gem install bundler -v 2.1.4 && bundle install
COPY . /myapp
