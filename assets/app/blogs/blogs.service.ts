import{Blog} from '../models/blog.model';

export class BlogsService {
  private blogs: Blog[] = [
    new Blog(
      'Blog One',
      'This is blog one\'s summary. Please click Read More to see more. This is blog one\'s summary. Please click Read More to see more.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices ligula eget tortor imperdiet, et lacinia nibh interdum. Vivamus molestie mattis diam, sed vulputate nulla eleifend et. Ut faucibus diam et ipsum dictum, vitae mattis lorem efficitur. Fusce at dictum leo, eu dignissim diam. Morbi tincidunt nunc ex, sed viverra lectus iaculis at. Nam eget sem nulla. Nulla egestas at dui ac placerat.',
      'http://res.cloudinary.com/dho1fmz51/image/upload/v1499395953/thumb_q7dgzg.jpg'
    ),
    new Blog(
      'Blog One',
      'This is blog one\'s summary. Please click Read More to see more. This is blog one\'s summary. Please click Read More to see more.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices ligula eget tortor imperdiet, et lacinia nibh interdum. Vivamus molestie mattis diam, sed vulputate nulla eleifend et. Ut faucibus diam et ipsum dictum, vitae mattis lorem efficitur. Fusce at dictum leo, eu dignissim diam. Morbi tincidunt nunc ex, sed viverra lectus iaculis at. Nam eget sem nulla. Nulla egestas at dui ac placerat.',
      'http://res.cloudinary.com/dho1fmz51/image/upload/v1499395953/thumb_q7dgzg.jpg'
    ),
    new Blog(
      'Blog One',
      'This is blog one\'s summary. Please click Read More to see more. This is blog one\'s summary. Please click Read More to see more.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices ligula eget tortor imperdiet, et lacinia nibh interdum. Vivamus molestie mattis diam, sed vulputate nulla eleifend et. Ut faucibus diam et ipsum dictum, vitae mattis lorem efficitur. Fusce at dictum leo, eu dignissim diam. Morbi tincidunt nunc ex, sed viverra lectus iaculis at. Nam eget sem nulla. Nulla egestas at dui ac placerat.',
      'http://res.cloudinary.com/dho1fmz51/image/upload/v1499395953/thumb_q7dgzg.jpg'
    ),
    new Blog(
      'Blog One',
      'This is blog one\'s summary. Please click Read More to see more. This is blog one\'s summary. Please click Read More to see more.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices ligula eget tortor imperdiet, et lacinia nibh interdum. Vivamus molestie mattis diam, sed vulputate nulla eleifend et. Ut faucibus diam et ipsum dictum, vitae mattis lorem efficitur. Fusce at dictum leo, eu dignissim diam. Morbi tincidunt nunc ex, sed viverra lectus iaculis at. Nam eget sem nulla. Nulla egestas at dui ac placerat.',
      'http://res.cloudinary.com/dho1fmz51/image/upload/v1499395953/thumb_q7dgzg.jpg'
    ),
    new Blog(
      'Blog One',
      'This is blog one\'s summary. Please click Read More to see more. This is blog one\'s summary. Please click Read More to see more.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices ligula eget tortor imperdiet, et lacinia nibh interdum. Vivamus molestie mattis diam, sed vulputate nulla eleifend et. Ut faucibus diam et ipsum dictum, vitae mattis lorem efficitur. Fusce at dictum leo, eu dignissim diam. Morbi tincidunt nunc ex, sed viverra lectus iaculis at. Nam eget sem nulla. Nulla egestas at dui ac placerat.',
      'http://res.cloudinary.com/dho1fmz51/image/upload/v1499395953/thumb_q7dgzg.jpg'
    ),
    new Blog(
      'Blog One',
      'This is blog one\'s summary. Please click Read More to see more. This is blog one\'s summary. Please click Read More to see more.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices ligula eget tortor imperdiet, et lacinia nibh interdum. Vivamus molestie mattis diam, sed vulputate nulla eleifend et. Ut faucibus diam et ipsum dictum, vitae mattis lorem efficitur. Fusce at dictum leo, eu dignissim diam. Morbi tincidunt nunc ex, sed viverra lectus iaculis at. Nam eget sem nulla. Nulla egestas at dui ac placerat.',
      'http://res.cloudinary.com/dho1fmz51/image/upload/v1499395953/thumb_q7dgzg.jpg'
    ),
    new Blog(
      'Blog Two',
      'This is blog one\'s summary. Please click Read More to see more. This is blog one\'s summary. Please click Read More to see more.',
      'Curabitur consectetur nisl odio, sed rutrum velit faucibus quis. Vestibulum tristique imperdiet maximus. In at fringilla velit. Donec vitae nunc in erat porttitor pretium vel id neque. Sed ornare orci et leo auctor, vel convallis sem venenatis. Quisque sit amet cursus risus. Vestibulum lectus mauris, pulvinar sed sapien sit amet, viverra feugiat lorem.',
      'http://res.cloudinary.com/dho1fmz51/image/upload/v1499395953/thumb_q7dgzg.jpg'
    ),
    new Blog(
      'Blog Three',
      'This is blog one\'s summary. Please click Read More to see more. This is blog one\'s summary. Please click Read More to see more.',
      'Integer bibendum varius ornare. Ut eu risus at purus eleifend semper sed et ex. Proin sed elit tempus, sollicitudin felis volutpat, vehicula erat. Donec eros purus, auctor sed dui vulputate, consectetur gravida ex. Maecenas auctor quam felis, ac ultrices tortor viverra et. Duis faucibus at justo ac vulputate. Donec finibus, mi ac porta dapibus, sem quam condimentum justo, ut ultricies turpis leo eget lorem. Mauris rutrum, felis sed pellentesque scelerisque, ipsum risus molestie enim, eget cursus augue dui sed ligula.',
      'http://res.cloudinary.com/dho1fmz51/image/upload/v1499395953/thumb_q7dgzg.jpg'
    )
  ]

  getBlogs() {
    return this.blogs.slice();
  }

  getBlog(id: number){
    return this.blogs[id];
  }

  newBlog(blog: Blog){
    this.blogs.push(blog);
  }
}