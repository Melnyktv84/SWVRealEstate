/** this is the entry point for SWVREstate .
* @param {import('SWVREstate').Application} app
*/

module.exports = app => {
  app.log('yay, the app was loaded!')

  app.on('issues.opened', async context => {
    const issueComment = context.issue({ body: 'Thanks for openening this issue! it worked'
    return context.github.issues.createComment(issueComment)

  })
})
