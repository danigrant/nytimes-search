let fetch = require('node-fetch')
let encodeUrl = require('encodeurl')

let baseUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
let newYorkTimesAPIKey = ''

void async function main() {
  let hingeCount = await queryNYT("met on hinge")
  await new Promise(cb => setTimeout(cb, 6000))

  let tinderCount = await queryNYT("met on tinder")
  await new Promise(cb => setTimeout(cb, 6000))

  let bumbleCount = await queryNYT("met on bumble")
  await new Promise(cb => setTimeout(cb, 6000))

  let jdateCount = await queryNYT("met on jdate")
  await new Promise(cb => setTimeout(cb, 6000))

  let coffeemeetsbagelCount = await queryNYT("met on coffee meets bagel")
  await new Promise(cb => setTimeout(cb, 6000))

  let grindrCount = await queryNYT("met on grindr")
  await new Promise(cb => setTimeout(cb, 6000))

  let matchcomCount = await queryNYT("met on match.com")
  await new Promise(cb => setTimeout(cb, 6000))

  let happnCount = await queryNYT("met on happn")
  await new Promise(cb => setTimeout(cb, 20000))

  let okcupidCount = await queryNYT("met on okcupid")
  await new Promise(cb => setTimeout(cb, 20000))

  let plentyoffishCount = await queryNYT("met on plenty of fish")
  await new Promise(cb => setTimeout(cb, 20000))

  let worldofwarcraftCount = await queryNYT("world of warcraft")
  await new Promise(cb => setTimeout(cb, 20000))

  let leagueoflegendsCount = await queryNYT("met on league of legends")
  await new Promise(cb => setTimeout(cb, 20000))

  let atabarCount = await queryNYT("met at a bar")
  await new Promise(cb => setTimeout(cb, 20000))

  let bookclubCount = await queryNYT("met at book club")
  await new Promise(cb => setTimeout(cb, 20000))

  let highschoolCount = await queryNYT("met in high school")
  await new Promise(cb => setTimeout(cb, 20000))

}()

async function queryNYT(term) {
  let source = "The New York Times"
  let subject = "Weddings and Engagements"
  let queryString = encodeUrl(`q=${term}&fq=source:("${source}") AND subject:("${subject}")&api-key=${newYorkTimesAPIKey}`)

  let res = await fetch(`${baseUrl}?${queryString}`)
  let json = await res.json()

  console.log(`${term}: ${json.response.meta.hits}`);
  return json.response.meta.hits
}
