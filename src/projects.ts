import PersonalSiteImage from "@/assets/personal_site_2023.png"
import TaylorSwiftSearchImage from "@/assets/taylorswift_song_search_2023.png"
import Word2VecImage from "@/assets/word2vec_2024.png"

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
    year: 2024,
    name: 'word2vec',
    description:
      'Single-layer neural network that converts words to dense vector encodings using gradient descent with cross-entropy loss and backpropogation.',
    components: ['Python, NumPy, pandas'],
    link: 'https://github.com/jaskwong/word2vec',
    image: Word2VecImage
  },
  {
    year: 2023,
    name: 'taylor swift song search',
    description:
      'ElasticSearch index and data crawler to search Taylor Swift songs and lyrics.',
    components: ['ElasticSearch, JavaScript'],
    link: 'https://github.com/jaskwong/taylor-swift-song-search',
    image: TaylorSwiftSearchImage
  },
  {
    year: 2023,
    name: 'personal website',
    description:
      'A website to showcase my personal projects. I hope to continuously update this as I work on more things so I can see them all in one place - kind of like a coding scrapbook.',
    components: ['typescript', 'css', 'vue.js', 'yarn'],
    link: 'https://github.com/jaskwong/personal-site-2023',
    image: PersonalSiteImage
  }
]
