what is data cache ??
- it is a server side cache that persists the result of data fetches across incoming server requests and deployments
why it is required ??
- the data cache improves app performance and reduces costs by eliminating the need to re-fetch data from your data source with every request.
- For individual dta fetches, you can opt out of caching by setting the catch option to no-store
- once you specify the no-store option for a fetch request subsequent requests will not be cached
- by default, next js will cache fetch() request that occur before any dynamic functions ( cookies(), headers(), searchParams(), etc) are used and will not cache requests found after dynamic functions
- request memorization is a technique that deduplicates  requests for the same data within a single render pass
- this approach allows for re-use of data in a React component tree, prevents redundant network calls and enhances performance