class V1::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all
    render json: { greetings: @greetings }, status: 200
  end
end
