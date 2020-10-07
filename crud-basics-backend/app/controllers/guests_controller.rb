class GuestsController < ApplicationController
    def index
        guests = Guest.all
        render json: guests
    end

    def create
        guest = Guest.create(guest_params)
        render json: guest
    end

    def update
        guest = Guest.find(params[:id])
        guest.update(guest_params)
        render json: guest
    end
    
    def destroy
        guest = Guest.find(params[:id])
        guest.destroy

    end

    private

    def guest_params
        params.permit(:name,:sex,:age,:VIP)
    end
end
