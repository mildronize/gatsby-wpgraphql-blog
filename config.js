const config = {
  wordPressUrl: `https://host.mildronize.com`,
  /* 
  1. Modify `src\components\SiteMenu\index.js` 
  find `menuItems(where: {location: THEME_MENU_LOCATION ]})`

  2. Replace `THEME_MENU_LOCATION` in `MenuLocationEnum`, You also find in the Document Explorer

  *******

  If the error shows `error GraphQL Error Expected type WPGraphQL_MenuLocationEnum`
  The solution:
  1.  On the Gatsby client, try to remove `.cache` directories
  Then, try run Gatsby again.  
  2.  On the wordpress, make sure you can get data using the query string 
      `
      {
        menuItems(where: {location: PRIMARY}) {
            nodes {
              id
            }
          }
        }
      `
      to test in `WPGraphiQL`. `location` type is `MenuLocationEnum`, You also find in the Document Explorer
      1.1 If it still error, try to reacticate `WPGraphQL` plugin in the Wordpress (after you change themem)
  
    Read more: https://github.com/zgordon/tabor-gatsby-theme/issues/10
  */
}

export default config
