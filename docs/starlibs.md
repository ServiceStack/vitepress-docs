---
slug: starlibs
---
# A call for high quality .NET #starlibs

## Keep other .NET developers in the know - start tweeting your #starlibs
We would like to build awareness of the great libraries in the .NET eco-system so we're calling on all pro .NET developers to start tweeting the libraries they love and use everyday using the twitter hash tag **[#starlibs](http://twitter.com/#!/search/starlibs)**. 

We will be keep an eye on this **live hashtag** for the best entries that we can assess for possible inclusion in this living document. At a minimum you will be providing your dev followers an invaluable service by letting them know the excellent libraries that you hold dearly that empowers your dev experience and makes it an enjoyable one.

## Why we need this?

We believe due to a history of poor guidance and good marketing, the .NET world is plagued with heavy, bloated, over-architected libraries that have in-efficient implementations, leaky abstractions and poor APIs and designs. Unfortunately in many cases, the most popular software is usually not of the best quality, just the best marketed.

Unfortunately we believe the .NET ecosystem needs this the most as it suffers more from poor guidance given there are very few good quality hubs of information that .NET developers look to. Other vibrant development platforms function in a more **open** environment and tend to evolve naturally where the best implementations are very well known and tend to bubble to the top.

In .NET the popular libraries tend to be the ones that are best integrated with VS.NET or what comes shipped as part of the .NET Framework. When the motivating use-case for a particular library is to be driven from a designer or wizard or to cater for the entry-level .NET developer we see that in most cases it promotes a **less beautiful** solution. 

So under this environment this list is born, with a hope to provide a good source of high-quality .NET libs for pro developers that would otherwise be unknown. We will carefully filter the recommendations on here and will choose only to link to .NET libraries that meet our test for good quality software.

In an effort to provide a good source of high-quality .NET libraries we will be maintaining a list of .NET libraries that have attributes and meets criteria we believe makes good software that promotes good software practices and is intuitive and enjoyable to use. As a general rule, this list only contains re-usable libraries that have minimal dependencies that allow it to be easily pluggable and freely shared amongst different frameworks and IOC's.

### Frameworks not included
Frameworks are expressly excluded from this list since the idea is for these components to appeal to the broadest set of .NET developers and the libraries themselves should be framework agnostic and can be effectively used inside any framework. Depending on the interest, we'll consider authoring a page on web frameworks as well since there is some renewed and exciting innovation happening in this space recently with many great frameworks to choose from. 

# The ServiceStack test for good software

****

#### 1. Should be Open Source 
With so many high-quality OSS software to choose from, we've rarely found it to be a good idea to have your systems bind to closed source proprietary software. Commercially motivated software companies are usually the worst perpetrators of mis information and poor guidance. OSS has many traits which on most occasions make it the best choice: constantly improving, frequent releases, code quality visible to everyone, broader and more active user-base, easier to diagnose, test, fix and contribute, etc.

With that said, there are some exceptions to this rule i.e. we consider the Razor template engine a high quality lib which is non-OSS although freely available to use.

#### 2. Must be well tested
Testing first or was tested after - we don't care, good software is always well tested to ensure it has minimal number of bugs/regressions and is verified to work as expected. 

#### 3. Must be lightweight, self-contained and portable
Smaller libraries usually avoid feature paralysis and are generally designed to solve their particular problem-set more elegantly than their bloated counter parts. Small, self-contained libraries are generally less opaque and invasive, have a shorter learning curve, are more re-usable, easier to upgrade and less-likely to suffer from dependency hell. 

We don't believe you should need to read a comprehensive manual or subscribe to a religion just to use a library, and with intuitive, well-designed self-desribing APIs we don't think you have to. So it bears repeating: Heavy weight libraries aren't recommended here and need not apply.

#### 4. Must be code-first and unhibitted by designers/wizards
This may also be a style preference but our experience tells us the most succinct APIs which encourage the least ceremony to use and are the easiest to test are modelled directly in the programming language, unhibitted by GUI designers. If you happen to prefer Drag N' Drop designers and wizards that's fine too, this just isn't the list for you.

#### 5. Must be recommended
To keep the selection process as transparent as possible, each component must be recommended. The most recommended components will be listed first in their respective category. 

A lot of value can be inferred by who the library is recommended by, this provides readers more context of the style and preferences of the libraries users so potential new users are better able to make up their own mind by researching the recommenders GitHub or twitter profile.

#### 6. Must be in `C#` or `F#`
This is more a style preference since you can effectively write bad code in any language. But this requirement is based on our experience that in general good developers do not code in VB.NET :). Having it in C# / F# also stands the best chance for the library to be more portable across frameworks and build-able with the cross-platform MONO toolchain.

#### 7. Must be supported
Some organization or somebody should maintain ownership of the software who can receive and act on bug reports. We don't mind if the only support available is commercial, as long as its supported.

#### 8. Must have sensible defaults and can work without mandatory App.config sections
Software that is dependent on heavy configuration, has more moving parts that makes it harder to configure correctly which in turn makes it more complex to maintain. Complex configurations also inhibit the ability to test the software in isolation and is therefore excluded.

### Beautiful Code
In general the above rules help to achieve and promote **beautiful code**, that is:

    A programmer knows he has achieved perfection not when there is nothing left to add, 
    but when there is nothing left to take away.  -- Antoine St Exupery


# The List - High quality .NET Libraries grouped by Category
****

Note: this **is an opinionated list** of hand-picked libraries **we believe** meet our guiding principles above. Our hope is this list provides some value and offers a good starting point for your own research as they've come recommended by other .NET developers you may look for advice. We also welcome recommendations from other pro .NET OSS developers who have a history of delivering high quality software (see: below).

## ORMs

### [Simple.Data](https://github.com/markrendle/Simple.Data) led by [@markrendle](http://twitter.com/markrendle) - 150 tests, 142KB

A new and very active ORM for .NET taking advantage of the dynamic features in .NET 4.0 to provide a dynamic and intuitive API letting you access virtually every SQL Server in existence today. With SQLite and MongoDB providers nearly finished this is one to watch in the future.

** Recommended By: ** [@demisbellot](http://twitter.com/demisbellot)


## NoSQL Clients

### [ServiceStack.Redis](https://github.com/ServiceStack/ServiceStack.Redis) led by [@demisbellot](http://twitter.com/demisbellot) and [@boxerab](http://twitter.com/boxerab) - 556 tests, 292KB, [benchmarks](http://www.servicestack.net/mythz_blog/?p=474)

An efficient C# client for the excellent [Redis](http://redis.io) NoSQL database. Offers both a low-level raw byte access and high-level strong-typed API.

** Recommended By: ** [@demisbellot](http://twitter.com/demisbellot)


### [RavenDB](https://github.com/ravendb/ravendb/) led by [@ayende](http://twitter.com/ayende) - 771KB (Client)

Raven is a .NET Linq enabled Document Database, focused on providing high performance, schema-less, flexible and scalable NoSQL data store for the .NET and Windows platforms.

** Recommended By: ** [@RobAshton](http://twitter.com/RobAshton)


## IOC's

### [AutoFac](http://code.google.com/p/autofac/) led by [@nblumhardt](http://twitter.com/nblumhardt) - 171KB

Autofac is an IoC container for Microsoft .NET. It manages the dependencies between classes so that applications stay easy to change as they grow in size and complexity.

** Recommended By: ** [@demisbellot](http://twitter.com/demisbellot)

### [Funq IOC](http://funq.codeplex.com/) led by [@kzu](http://twitter.com/kzu) - **?** tests, 54KB, [benchmarks](http://www.codeproject.com/Articles/43296/Introduction-to-Munq-IOC-Container-for-ASP-NET.aspx)

A high performance DI framework by eliminating all runtime reflection through the use of lambdas and generic functions as factories. [Munq IOC](http://funq.codeplex.com/) is a popular fork tailored for Web Hosts.

** Recommended By: ** [@demisbellot](http://twitter.com/demisbellot)


## Testing and Mocking Frameworks

### [Moq](http://code.google.com/p/moq/) led by [@kzu](http://twitter.com/kzu) - **?** tests, 496KB

Moq is the only mocking library for .NET developed from scratch to take full advantage of .NET 3.5 (i.e. Linq expression trees) and C# 3.0 features (i.e. lambda expressions) that make it the most productive, type-safe and refactoring-friendly mocking library available.

** Recommended By: ** [@demisbellot](http://twitter.com/demisbellot)

### [FakeItEasy](http://code.google.com/p/fakeiteasy/) led by [@patrik_hagne](http://twitter.com/patrik_hagne) - 873 tests, 479KB
The easy mocking framework for .Net.

** Recommended By: ** [@TheCodeJunkie](http://twitter.com/TheCodeJunkie)

The name of, category and 1 sentence describing the library

### [Simple.Mocking](http://simpledotnet.codeplex.com/) led by [@mikwal](http://www.codeplex.com/site/users/view/mikwal) - 272 tests, 57kb
Easy to use framework for creating mock objects, fakes, stubs with an intuitive and fluent API.

** Recommended By: ** [@advisesolutions](http://twitter.com/advisesolutions)

## Serializers

### [protobuf-net](http://code.google.com/p/protobuf-net/) by [@marcgravell](http://twitter.com/marcgravell) - 427 tests, 137KB, [benchmarks](http://code.google.com/p/protobuf-net/wiki/Performance)

Likely the fastest, full-featured binary serializer to grace .NET shores. protobuf-net is a very efficient implementation of [Google's Protocol Buffers](http://code.google.com/apis/protocolbuffers/).

** Recommended By: ** [@demisbellot](http://twitter.com/demisbellot)

### [ServiceStack.Text](https://github.com/ServiceStack/ServiceStack.Text) by [@demisbellot](http://twitter.com/demisbellot) - 218 tests, 98KB, [benchmarks](http://www.servicestack.net/benchmarks/NorthwindDatabaseRowsSerialization.1000000-times.2010-02-06.html)

ServiceStack's string text processing library containing the fastest and most compact JSON, JSV and CSV Text Serializers for .NET

** Recommended By: ** [@demisbellot](http://twitter.com/demisbellot)

## Template Engines

### [Razor Engine](http://razorengine.codeplex.com/) **?** tests, 208KB

A very elegant, wrist-friendly syntax providing a succinct DSL-like templating language to naturally mix C# source code and HTML markup

** Recommended By: ** [@demisbellot](http://twitter.com/demisbellot)

### [Spark View Engine](https://github.com/SparkViewEngine/spark) led by [@RobertTheGrey](http://twitter.com/RobertTheGrey) and [@loudej](http://twitter.com/loudej) - 618 tests, 314KB

[Spark](http://www.sparkviewengine.com/) is a view engine for ASP.NET MVC, Castle Project MonoRail, FubuMVC, NancyFx, JessicaFx and OpenRasta frameworks. Or just run it from the Console by itself! The idea is to allow the html to dominate the flow and the code to fit seamlessly. Oh, and it's great for email templating...

** Recommended By: ** [@demisbellot](http://twitter.com/demisbellot)

## Recommend a software library
****

#### Do you know software that you love which would survive the test?

We'd love to hear from you. The best way to recommend a library for inclusion here is to email me directly at **demis.bellot@gmail.com** please along with your submission include:

  * The name of, category and 1 sentence describing the library
  * The project maintainer (preferably links to GitHub and Twitter)
  * The total number of tests 
  * The total size in kb of a minimal working configuration **including dependencies**
  * Your Twitter or GitHub username (to add as a recommendation)

Fill out what you can, at a minimum we will record your recommendation against the library.
