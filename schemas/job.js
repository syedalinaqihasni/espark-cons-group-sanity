// jobs.js
export default {
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      description: 'Enter the job title',
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      validation: (Rule) =>
        Rule.max(100).warning(
          'Short Description should not exceed 100 characters.'
        ),
      description: 'Enter a brief description of the job (max 100 characters)',
    },
    {
      name: 'detailsDescription',
      title: 'Details Description',
      description: 'Enter detailed job description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'Enter the link to the job posting',
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
    {
      name: 'location',
      title: 'Location',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Add city/country for the job',
    },
    {
      name: 'jobType',
      title: 'Job Type',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Add city/country for the job',
    },
   
  ],
  preview: {
    select: {
      title: 'jobTitle',
      subtitle: 'location.0',
    },
  },
};
