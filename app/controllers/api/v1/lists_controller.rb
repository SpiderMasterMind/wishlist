module Api
  module V1
    class ListsController < BaseController
      before_action :set_list, only: [:show, :edit, :update, :destroy]

      # GET /lists.json
      def index
        respond_with List.all
      end

      # GET /lists/1.json
      def show
        respond_with List.find(params[:id])
      end

      def new
        @list = List.new
      end

      def edit
      end

      def create
        @list = List.new(list_params)
        respond_to do |format|
          if @list.save
            format.html { redirect_to @list, notice: 'List was successfully created.' }
            format.json { render :show, status: :created, location: @list }
          else
            format.html { render :new }
            format.json { render json: @list.errors, status: :unprocessable_entity }
          end
        end
      end

      def update
        respond_to do |format|
          if @list.update(list_params)
            format.html { redirect_to @list, notice: 'List was successfully updated.' }
            format.json { render :show, status: :ok, location: @list }
          else
            format.html { render :edit }
            format.json { render json: @list.errors, status: :unprocessable_entity }
          end
        end
      end

      def destroy
        @list.destroy
        respond_to do |format|
          format.html { redirect_to lists_url, notice: 'List was successfully destroyed.' }
          format.json { head :no_content }
        end
      end

      private

      def set_list
        @list = List.find(params[:id])
      end

      def list_params
        params.require(:list).permit(:title, :comments, :url)
      end
    end
  end
end
