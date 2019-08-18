const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/nicogig/fleming-soc-website.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)