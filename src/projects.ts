export type project = {
  year: number
  name: string
  description: string
  components: string[]
  link: string
  image: string
}

export const PERSONAL_PROJECTS: project[] = [
  {
    year: 2023,
    name: 'personal website',
    description:
      'A website to showcase my personal projects. I hope to continuously update this as I work on more things so I can see them all in one place - kind of like a coding scrapbook.',
    components: ['typescript', 'css', 'vue.js', 'yarn'],
    link: 'https://github.com/jaskwong/personal-site-2023',
    image: '/src/assets/personal_site_2023.png'
  }
]
