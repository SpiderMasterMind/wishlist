module Api
  module V1
    class ItemsController < BaseController
      before_action :set_item, only: [:show, :edit, :update, :destroy]

      def index
        respond_with Item.all
      end

      def show
        respond_with Item.find(params[:id])
      end

      def new
        @item = Item.new
      end

      def edit
      end

      def create
        @list = List.find(item_params.fetch(:list_id))
        @item = Item.new(item_params.except(:list_id))

        respond_to do |format|
          if @item.save && @list.present?
            @list.items << @item
            format.json { render :show, status: :created }
          else
            format.json do
              render json: @item.errors, status: :unprocessable_entity
            end
          end
        end
      end

      def update
        respond_to do |format|
          if @item.update(item_params)
            format.json { render :show, status: :ok } 
          else
            format.json do
              render json: @item.errors, status: :unprocessable_entity
            end
          end
        end
      end

      def destroy
        @item.destroy
        respond_to do |format|
          format.json { render status: :ok }
        end
      end

    private

      def set_item
        @item = Item.find(params[:id])
      end

      def item_params
        params.require(:item).permit(:list_id, :name, :description, :url)
      end
    end
  end
end
