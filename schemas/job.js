// jobs.js
import client from '../sanityClient';

// Custom validation function for ensuring unique job titles
function isUniqueJobTitle(jobTitle, { document }) {
  // Check if there is already a job with the same title
  return client
    .fetch('*[_type == "job" && jobTitle == $jobTitle && _id != $id][0]', {
      jobTitle,
      id: document._id || '',
    })
    .then(existingJob => {
      if (existingJob) {
        return 'A job with this title already exists';
      }
      return true;
    });
}

export default {
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) =>
        Rule.required().custom(isUniqueJobTitle),
      description: 'Enter the job title',
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      description: 'Enter a brief description of the job',
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
