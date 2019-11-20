const gitRepoInfo = require('git-repo-info')

const getBranchFromEnvironment = () => {
  const { branch } = gitRepoInfo()
  console.log('BRANCH', branch)
  console.log('BRANCH Gatsby', process.env.GATSBY_CMS_BRANCH)
  console.log('BRANCH netlify', process.env.BRANCH)
  console.log('HEAD netlify', process.env.HEAD)
  console.log('NETLIFY', process.env.NETLIFY)
  if (process.env.NETLIFY) {
    return process.env.HEAD
  } else {
    return branch
  }
}

const branch = getBranchFromEnvironment()

const addGatsbyCmsBranchToEnvironment = () => {
  console.log(`Adding environment variable: GATSBY_CMS_BRANCH = ${branch}`)
  process.env.GATSBY_CMS_BRANCH = branch
  console.log(`New value: ${process.env.GATSBY_CMS_BRANCH}`)
}

module.exports = {
  addGatsbyCmsBranchToEnvironment,
  branch,
}
