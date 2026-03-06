import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'dreamPost',
  title: 'Dream Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(280),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'dreamType',
      title: 'Dream Type',
      type: 'string',
      options: {
        list: [
          { title: 'Lucid', value: 'Lucid' },
          { title: 'Nightmare', value: 'Nightmare' },
          { title: 'Recurring', value: 'Recurring' },
          { title: 'Prophetic', value: 'Prophetic' },
          { title: 'Surreal', value: 'Surreal' },
          { title: 'Adventure', value: 'Adventure' },
          { title: 'Flying', value: 'Flying' },
          { title: 'Other', value: 'Other' },
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'dreamMood',
      title: 'Dream Mood',
      type: 'string',
      options: {
        list: [
          { title: 'Peaceful', value: 'Peaceful' },
          { title: 'Eerie', value: 'Eerie' },
          { title: 'Euphoric', value: 'Euphoric' },
          { title: 'Anxious', value: 'Anxious' },
          { title: 'Mystical', value: 'Mystical' },
          { title: 'Melancholic', value: 'Melancholic' },
          { title: 'Chaotic', value: 'Chaotic' },
          { title: 'Serene', value: 'Serene' },
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'coverImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
