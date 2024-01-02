import { defineType, defineArrayMember } from 'sanity';

// blogs.js
export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter the blog title',
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
      description: 'Enter the blog content',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Enter the blog content',
    },
    {
      name: 'image', 
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload the main image for the blog',
    },
    {
      name: 'subimage',
      title: 'sub Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload the main image for the blog',
    },
    {
      name: 'jobCategory',
      title: 'Job Category',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'blogCategory' } }],
      description: 'Enter the job category for the blog',
    },
    {
      name: 'jobTag',
      title: 'Job Tag',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'blogTag' } }],
      description: 'Enter the job type for the blog',
    },
    {
      name: 'datePicker',
      title: 'Date Picker',
      type: 'date',
      options: {
        dateFormat: 'YYYY/MM/DD',
      },
      description: 'Select the date for the job posting',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'jobCategory.0',
    },
  },
};
