---
slug: admin-users
title: User Admin Feature
---

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/studio/studio-user-results.png)

The `AdminUsersFeature` provides Admin User Management APIs enabling remote programmatic access to your registered [User Auth Repository](/authentication-and-authorization#user-auth-repository), featuring:

 - Works with existing `IUserAuthRepository` sync or async providers
 - Utilizes Progressive enhancement, e.g. search functionality utilizes `IQueryUserAuth` (if exists) performing a wildcard search over multiple fields, otherwise falls back to exact match on `UserName` or `Email`
 - Supports managing Auth Repositories utilizing custom `UserAuth` data models
 - Flexible UI options for customizing which fields to include in Search Results and Create/Edit UIs
 - Rich Metadata aggregating only App-specific Roles & Permissions defined in your App
 - User Events allow you to execute custom logic before & after each Created/Updated/Deleted User

### Installation

User Admin Plugin is a lightweight API around Auth Repository APIs with no additional dependencies that can be registered with:

```csharp
Plugins.Add(new AdminUsersFeature());
```

### Usage Example

Please see ServiceStack Studio's [User Admin Module](/studio-users) for docs & examples of available customization options in `AdminUsersFeature`.

### Admin User Services

The Admin User back-end APIs themselves can also be used to manage users within your own Apps. 

All the Admin Users DTOs below contains everything needed to call its APIs from [.NET Service Clients](/csharp-client) which are all contained within **ServiceStack.Client** so no additional dependencies are needed.

The APIs are fairly straight-forward with each DTO containing on the bare minimum Typed properties with all other UserAuth fields you want updated in the `UserAuthProperties` Dictionary. Whilst all User result-sets are returned in an unstructured Object Dictionary.

```csharp
public abstract class AdminUserBase : IMeta
{
    public string UserName { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string DisplayName { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string ProfileUrl { get; set; }
    public Dictionary<string, string> UserAuthProperties { get; set; }
    public Dictionary<string, string> Meta { get; set; }
}

public partial class AdminCreateUser : AdminUserBase, IPost, IReturn<AdminUserResponse>
{
    public List<string> Roles { get; set; }
    public List<string> Permissions { get; set; }
}

public partial class AdminUpdateUser : AdminUserBase, IPut, IReturn<AdminUserResponse>
{
    public string Id { get; set; }
    public bool? LockUser { get; set; }
    public bool? UnlockUser { get; set; }
    public List<string> AddRoles { get; set; }
    public List<string> RemoveRoles { get; set; }
    public List<string> AddPermissions { get; set; }
    public List<string> RemovePermissions { get; set; }
}

public partial class AdminGetUser : IGet, IReturn<AdminUserResponse>
{
    public string Id { get; set; }
}

public partial class AdminDeleteUser : IDelete, IReturn<AdminDeleteUserResponse>
{
    public string Id { get; set; }
}

public class AdminDeleteUserResponse : IHasResponseStatus
{
    public string Id { get; set; }
    public ResponseStatus ResponseStatus { get; set; }
}

public partial class AdminUserResponse : IHasResponseStatus
{
    public string Id { get; set; }
    public Dictionary<string,object> Result { get; set; }
    public ResponseStatus ResponseStatus { get; set; }
}

public partial class AdminQueryUsers : IGet, IReturn<AdminUsersResponse>
{
    public string Query { get; set; }
    public string OrderBy { get; set; }
    public int? Skip { get; set; }
    public int? Take { get; set; }
}

public class AdminUsersResponse : IHasResponseStatus
{
    public List<Dictionary<string,object>> Results { get; set; }
    public ResponseStatus ResponseStatus { get; set; }
}
```
