---
slug: autoquery-memory
title: AutoQuery Memory Data Source
---

The simplest data source we can query is an in-memory .NET collection registered with `ctx.MemorySource()`. 
But how the collection is populated remains up to you. The example below shows registering collections from 
multiple sources inc. **in-line code**, populated **from a CSV file** (utilizing ServiceStack's 
CSV deserialization support) and populated **from a 3rd Party API** using 
[HTTP Utils](/http-utils):

```csharp
//Declaration in code
var countries = new[] {
    new Country { ... },
    new Country { ... },
};

//From CSV File
List<Currency> currencies = File.ReadAllText("currencies.csv").FromCsv<List<Currency>>();

//From 3rd Party API
List<GithubRepo> repos = "https://api.github.com/orgs/ServiceStack/repos"
    .GetJsonFromUrl(req => req.UserAgent="AutoQuery").FromJson<List<GithubRepo>>();

//AutoQuery Data Plugin
Plugins.Add(new AutoQueryDataFeature { MaxLimit = 100 }
    .AddDataSource(ctx => ctx.MemorySource(countries))
    .AddDataSource(ctx => ctx.MemorySource(currencies))
    .AddDataSource(ctx => ctx.MemorySource(repos))
);
```

After data sources are registered, you can then create AutoQuery Data Services to query them:

```csharp
[Route("/countries")]
public class QueryCountries : QueryData<Country> {}

[Route("/currencies")]
public class QueryCurrencies : QueryData<Currency> {}

[Route("/repos")]
public class QueryGithubRepos : QueryData<GithubRepo> {}
```

With just the empty Request DTO's above they're now queryable like any other AutoQuery Service, e.g:

   - /countries?code=AU
   - /currencies.json?code=AUD
   - /repos.csv?watchers_count>=100&orderBy=-watchers_count,name&fields=name,homepage,language

### Cacheable Data Sources

The examples above provides a nice demonstration of querying static memory collections. But Data Sources 
offers even more flexibility where you're also able to query and cache dynamic .NET collections that 
are customizable per-request.

The registration below shows an example of this where results are dynamically fetched from **GitHub's API** 
and persisted in the **local in-memory cache** for **5 minutes** - throttling the number of requests made 
to the external 3rd Party API:

```csharp
.AddDataSource(ctx => ctx.MemorySource(() => 
 $"https://api.github.com/repos/ServiceStack/{ctx.Request.GetParam("repo")}/contributors"
   .GetJsonFromUrl(req => req.UserAgent="AutoQuery").FromJson<List<GithubContributor>>(),
  HostContext.LocalCache, 
  TimeSpan.FromMinutes(5)
));
```

We can now create an AutoQuery Data Service to query the above cached `GithubContributor` Memory Source:

```csharp
[Route("/contributors")]
public class QueryContributors : QueryData<GithubContributor>
{
    public string Repo { get; set; }
}
```

Thanks to the Typed Request DTO we also get an end-to-end Typed API for free which we can use to query 
the contributors result-set returned from GitHub's API. As an example we can view the 
**Top 20 Contributors** for the **ServiceStack** Project with:

```csharp
var top20Contributors = client.Get(new QueryContributors {
    Repo = "ServiceStack",
    OrderByDesc = "Contributions",
    Take = 20
});

top20Contributors.PrintDump(); // Pretty print results to Console
```
