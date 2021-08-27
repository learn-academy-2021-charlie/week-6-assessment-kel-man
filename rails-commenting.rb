# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
class BlogPostsController < ApplicationController # Creates a controller class for BlogPosts that inherits all behavior from ApplicationController
  def index
    # ---2)
    @posts = BlogPost.all # Selects every entry from the BlogPost table and assigns it to the instance variable @posts. Returns this instance variable as it is the only line of code in this method
  end

  def show
    # ---3)
    @post = BlogPost.find(params[:id]) # Returns an instance variable containing a single blog post located by the id passed into the request params
  end

  # ---4)
  def new # Defines a method that creates an instance variable of an empty Post object built from the Post class. This entry is not saved to the database
    @post = Post.new
  end

  def create
    # ---5)
    @post = BlogPost.create(blog_post_params) #Assigns an instance variable to the output of the attempted creation of a new entry to the BlogPost table using the strong params defined below
    if @post.valid? # If the blog_post_params were valid and accepted and the post was created in the database, the user is redirected to a view of just that blog post
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path # If the blog post params were invalid then the user is redirected to the new post view where they can attempt to enter the correct params once again.
    end
  end

  # ---6)
  def edit # Defines a method that finds a specific blog post and returns an instance variable that contains that object. Uses the same logic as "new" but a different route, resulting in a view instead of a database entry
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    @post.update(blog_post_params) # Using the same logic as "create" attempts to update an entry using the params.
    if @post.valid?
      redirect_to blog_post_path(@post) # If the update was successful then the user is shown a view of that updated post
    else
      redirect_to edit_blog_post_path # If unsuccessful the user is redirected to the edit view once again to attempt to update the entry correctly
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      redirect_to blog_post_path(@post) # If the post was not properly destroyed then the user is sent back to the view of that specific blog post
    end
  end

  # ---9)
  private
  def blog_post_params # Defines a method blog_post_params that is inaccessible outside this file
    # ---10)
    params.require(:blog_post).permit(:title, :content) # Filters params to only accept an object blog_post that contains two key:value pairs title and content. This protects from sql injection attacks
  end
end
