/* Options:
Date: 2021-09-22 08:10:22
Version: 5.111
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://chinook.netcore.io

//GlobalNamespace: 
//MakePropertiesOptional: False
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/


export interface IReturn<T>
{
    createResponse(): T;
}

export interface IReturnVoid
{
    createResponse(): void;
}

export interface IGet
{
}

export interface IPost
{
}

export interface ICreateDb<Table>
{
}

export interface IDelete
{
}

export interface IDeleteDb<Table>
{
}

export interface IPatch
{
}

export interface IPatchDb<Table>
{
}

export interface IPut
{
}

export interface IUpdateDb<Table>
{
}

// @DataContract
export class QueryBase
{
    // @DataMember(Order=1)
    public skip?: number;

    // @DataMember(Order=2)
    public take?: number;

    // @DataMember(Order=3)
    public orderBy: string;

    // @DataMember(Order=4)
    public orderByDesc: string;

    // @DataMember(Order=5)
    public include: string;

    // @DataMember(Order=6)
    public fields: string;

    // @DataMember(Order=7)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<QueryBase>) { (Object as any).assign(this, init); }
}

export class QueryDb<T> extends QueryBase
{

    public constructor(init?: Partial<QueryDb<T>>) { super(init); (Object as any).assign(this, init); }
}

export class Albums
{
    public albumId: number;
    // @Required()
    public title: string;

    public artistId: number;

    public constructor(init?: Partial<Albums>) { (Object as any).assign(this, init); }
}

export class Artists
{
    public artistId: number;
    public name: string;

    public constructor(init?: Partial<Artists>) { (Object as any).assign(this, init); }
}

export class Customers
{
    public customerId: number;
    // @Required()
    public firstName: string;

    // @Required()
    public lastName: string;

    public company: string;
    public address: string;
    public city: string;
    public state: string;
    public country: string;
    public postalCode: string;
    public phone: string;
    public fax: string;
    // @Required()
    public email: string;

    public supportRepId?: number;

    public constructor(init?: Partial<Customers>) { (Object as any).assign(this, init); }
}

export class Employees
{
    public employeeId: number;
    // @Required()
    public lastName: string;

    // @Required()
    public firstName: string;

    public title: string;
    public reportsTo?: number;
    public birthDate?: string;
    public hireDate?: string;
    public address: string;
    public city: string;
    public state: string;
    public country: string;
    public postalCode: string;
    public phone: string;
    public fax: string;
    public email: string;

    public constructor(init?: Partial<Employees>) { (Object as any).assign(this, init); }
}

export class Genres
{
    public genreId: number;
    public name: string;

    public constructor(init?: Partial<Genres>) { (Object as any).assign(this, init); }
}

export class InvoiceItems
{
    public invoiceLineId: number;
    public invoiceId: number;
    public trackId: number;
    public unitPrice: number;
    public quantity: number;

    public constructor(init?: Partial<InvoiceItems>) { (Object as any).assign(this, init); }
}

export class Invoices
{
    public invoiceId: number;
    public customerId: number;
    public invoiceDate: string;
    public billingAddress: string;
    public billingCity: string;
    public billingState: string;
    public billingCountry: string;
    public billingPostalCode: string;
    public total: number;

    public constructor(init?: Partial<Invoices>) { (Object as any).assign(this, init); }
}

export class MediaTypes
{
    public mediaTypeId: number;
    public name: string;

    public constructor(init?: Partial<MediaTypes>) { (Object as any).assign(this, init); }
}

export class Playlists
{
    public playlistId: number;
    public name: string;

    public constructor(init?: Partial<Playlists>) { (Object as any).assign(this, init); }
}

export class Tracks
{
    public trackId: number;
    // @Required()
    public name: string;

    public albumId?: number;
    public mediaTypeId: number;
    public genreId?: number;
    public composer: string;
    public milliseconds: number;
    public bytes?: number;
    public unitPrice: number;

    public constructor(init?: Partial<Tracks>) { (Object as any).assign(this, init); }
}

// @DataContract
export class ResponseError
{
    // @DataMember(Order=1)
    public errorCode: string;

    // @DataMember(Order=2)
    public fieldName: string;

    // @DataMember(Order=3)
    public message: string;

    // @DataMember(Order=4)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<ResponseError>) { (Object as any).assign(this, init); }
}

// @DataContract
export class ResponseStatus
{
    // @DataMember(Order=1)
    public errorCode: string;

    // @DataMember(Order=2)
    public message: string;

    // @DataMember(Order=3)
    public stackTrace: string;

    // @DataMember(Order=4)
    public errors: ResponseError[];

    // @DataMember(Order=5)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<ResponseStatus>) { (Object as any).assign(this, init); }
}

export class HelloResponse
{
    public result: string;

    public constructor(init?: Partial<HelloResponse>) { (Object as any).assign(this, init); }
}

// @DataContract
export class QueryResponse<T>
{
    // @DataMember(Order=1)
    public offset: number;

    // @DataMember(Order=2)
    public total: number;

    // @DataMember(Order=3)
    public results: T[];

    // @DataMember(Order=4)
    public meta: { [index: string]: string; };

    // @DataMember(Order=5)
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<QueryResponse<T>>) { (Object as any).assign(this, init); }
}

// @DataContract
export class IdResponse
{
    // @DataMember(Order=1)
    public id: string;

    // @DataMember(Order=2)
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<IdResponse>) { (Object as any).assign(this, init); }
}

// @Route("/hello")
// @Route("/hello/{Name}")
export class Hello implements IReturn<HelloResponse>
{
    public name: string;

    public constructor(init?: Partial<Hello>) { (Object as any).assign(this, init); }
    public createResponse() { return new HelloResponse(); }
    public getTypeName() { return 'Hello'; }
}

// @Route("/albums", "GET")
// @Route("/albums/{AlbumId}", "GET")
export class QueryAlbums extends QueryDb<Albums> implements IReturn<QueryResponse<Albums>>, IGet
{
    public albumId?: number;

    public constructor(init?: Partial<QueryAlbums>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new QueryResponse<Albums>(); }
    public getTypeName() { return 'QueryAlbums'; }
}

// @Route("/artists", "GET")
// @Route("/artists/{ArtistId}", "GET")
export class QueryArtists extends QueryDb<Artists> implements IReturn<QueryResponse<Artists>>, IGet
{
    public artistId?: number;
    public artistIdBetween: number[];
    public nameStartsWith: string;

    public constructor(init?: Partial<QueryArtists>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new QueryResponse<Artists>(); }
    public getTypeName() { return 'QueryArtists'; }
}

// @Route("/customers", "GET")
// @Route("/customers/{CustomerId}", "GET")
export class QueryCustomers extends QueryDb<Customers> implements IReturn<QueryResponse<Customers>>, IGet
{
    public customerId?: number;

    public constructor(init?: Partial<QueryCustomers>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new QueryResponse<Customers>(); }
    public getTypeName() { return 'QueryCustomers'; }
}

// @Route("/employees", "GET")
// @Route("/employees/{EmployeeId}", "GET")
export class QueryEmployees extends QueryDb<Employees> implements IReturn<QueryResponse<Employees>>, IGet
{
    public employeeId?: number;

    public constructor(init?: Partial<QueryEmployees>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new QueryResponse<Employees>(); }
    public getTypeName() { return 'QueryEmployees'; }
}

// @Route("/genres", "GET")
// @Route("/genres/{GenreId}", "GET")
export class QueryGenres extends QueryDb<Genres> implements IReturn<QueryResponse<Genres>>, IGet
{
    public genreId?: number;

    public constructor(init?: Partial<QueryGenres>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new QueryResponse<Genres>(); }
    public getTypeName() { return 'QueryGenres'; }
}

// @Route("/invoiceitems", "GET")
// @Route("/invoiceitems/{InvoiceLineId}", "GET")
export class QueryInvoiceItems extends QueryDb<InvoiceItems> implements IReturn<QueryResponse<InvoiceItems>>, IGet
{
    public invoiceLineId?: number;

    public constructor(init?: Partial<QueryInvoiceItems>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new QueryResponse<InvoiceItems>(); }
    public getTypeName() { return 'QueryInvoiceItems'; }
}

// @Route("/invoices", "GET")
// @Route("/invoices/{InvoiceId}", "GET")
export class QueryInvoices extends QueryDb<Invoices> implements IReturn<QueryResponse<Invoices>>, IGet
{
    public invoiceId?: number;

    public constructor(init?: Partial<QueryInvoices>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new QueryResponse<Invoices>(); }
    public getTypeName() { return 'QueryInvoices'; }
}

// @Route("/mediatypes", "GET")
// @Route("/mediatypes/{MediaTypeId}", "GET")
export class QueryMediaTypes extends QueryDb<MediaTypes> implements IReturn<QueryResponse<MediaTypes>>, IGet
{
    public mediaTypeId?: number;

    public constructor(init?: Partial<QueryMediaTypes>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new QueryResponse<MediaTypes>(); }
    public getTypeName() { return 'QueryMediaTypes'; }
}

// @Route("/playlists", "GET")
// @Route("/playlists/{PlaylistId}", "GET")
export class QueryPlaylists extends QueryDb<Playlists> implements IReturn<QueryResponse<Playlists>>, IGet
{
    public playlistId?: number;

    public constructor(init?: Partial<QueryPlaylists>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new QueryResponse<Playlists>(); }
    public getTypeName() { return 'QueryPlaylists'; }
}

// @Route("/tracks", "GET")
// @Route("/tracks/{TrackId}", "GET")
export class QueryTracks extends QueryDb<Tracks> implements IReturn<QueryResponse<Tracks>>, IGet
{
    public trackId?: number;
    public nameContains: string;

    public constructor(init?: Partial<QueryTracks>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new QueryResponse<Tracks>(); }
    public getTypeName() { return 'QueryTracks'; }
}

// @Route("/albums", "POST")
export class CreateAlbums implements IReturn<IdResponse>, IPost, ICreateDb<Albums>
{
    public title: string;
    public artistId: number;

    public constructor(init?: Partial<CreateAlbums>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'CreateAlbums'; }
}

// @Route("/artists", "POST")
export class CreateArtists implements IReturn<IdResponse>, IPost, ICreateDb<Artists>
{
    public name: string;

    public constructor(init?: Partial<CreateArtists>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'CreateArtists'; }
}

// @Route("/customers", "POST")
export class CreateCustomers implements IReturn<IdResponse>, IPost, ICreateDb<Customers>
{
    public firstName: string;
    public lastName: string;
    public company: string;
    public address: string;
    public city: string;
    public state: string;
    public country: string;
    public postalCode: string;
    public phone: string;
    public fax: string;
    public email: string;
    public supportRepId?: number;

    public constructor(init?: Partial<CreateCustomers>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'CreateCustomers'; }
}

// @Route("/employees", "POST")
export class CreateEmployees implements IReturn<IdResponse>, IPost, ICreateDb<Employees>
{
    public lastName: string;
    public firstName: string;
    public title: string;
    public reportsTo?: number;
    public birthDate?: string;
    public hireDate?: string;
    public address: string;
    public city: string;
    public state: string;
    public country: string;
    public postalCode: string;
    public phone: string;
    public fax: string;
    public email: string;

    public constructor(init?: Partial<CreateEmployees>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'CreateEmployees'; }
}

// @Route("/genres", "POST")
export class CreateGenres implements IReturn<IdResponse>, IPost, ICreateDb<Genres>
{
    public name: string;

    public constructor(init?: Partial<CreateGenres>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'CreateGenres'; }
}

// @Route("/invoiceitems", "POST")
export class CreateInvoiceItems implements IReturn<IdResponse>, IPost, ICreateDb<InvoiceItems>
{
    public invoiceId: number;
    public trackId: number;
    public unitPrice: number;
    public quantity: number;

    public constructor(init?: Partial<CreateInvoiceItems>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'CreateInvoiceItems'; }
}

// @Route("/invoices", "POST")
export class CreateInvoices implements IReturn<IdResponse>, IPost, ICreateDb<Invoices>
{
    public customerId: number;
    public invoiceDate: string;
    public billingAddress: string;
    public billingCity: string;
    public billingState: string;
    public billingCountry: string;
    public billingPostalCode: string;
    public total: number;

    public constructor(init?: Partial<CreateInvoices>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'CreateInvoices'; }
}

// @Route("/mediatypes", "POST")
export class CreateMediaTypes implements IReturn<IdResponse>, IPost, ICreateDb<MediaTypes>
{
    public name: string;

    public constructor(init?: Partial<CreateMediaTypes>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'CreateMediaTypes'; }
}

// @Route("/playlists", "POST")
export class CreatePlaylists implements IReturn<IdResponse>, IPost, ICreateDb<Playlists>
{
    public name: string;

    public constructor(init?: Partial<CreatePlaylists>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'CreatePlaylists'; }
}

// @Route("/tracks", "POST")
export class CreateTracks implements IReturn<IdResponse>, IPost, ICreateDb<Tracks>
{
    public name: string;
    public albumId?: number;
    public mediaTypeId: number;
    public genreId?: number;
    public composer: string;
    public milliseconds: number;
    public bytes?: number;
    public unitPrice: number;

    public constructor(init?: Partial<CreateTracks>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'CreateTracks'; }
}

// @Route("/albums/{AlbumId}", "DELETE")
export class DeleteAlbums implements IReturn<IdResponse>, IDelete, IDeleteDb<Albums>
{
    public albumId: number;

    public constructor(init?: Partial<DeleteAlbums>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'DeleteAlbums'; }
}

// @Route("/artists/{ArtistId}", "DELETE")
export class DeleteArtists implements IReturn<IdResponse>, IDelete, IDeleteDb<Artists>
{
    public artistId: number;

    public constructor(init?: Partial<DeleteArtists>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'DeleteArtists'; }
}

// @Route("/customers/{CustomerId}", "DELETE")
export class DeleteCustomers implements IReturn<IdResponse>, IDelete, IDeleteDb<Customers>
{
    public customerId: number;

    public constructor(init?: Partial<DeleteCustomers>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'DeleteCustomers'; }
}

// @Route("/employees/{EmployeeId}", "DELETE")
export class DeleteEmployees implements IReturn<IdResponse>, IDelete, IDeleteDb<Employees>
{
    public employeeId: number;

    public constructor(init?: Partial<DeleteEmployees>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'DeleteEmployees'; }
}

// @Route("/genres/{GenreId}", "DELETE")
export class DeleteGenres implements IReturn<IdResponse>, IDelete, IDeleteDb<Genres>
{
    public genreId: number;

    public constructor(init?: Partial<DeleteGenres>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'DeleteGenres'; }
}

// @Route("/invoiceitems/{InvoiceLineId}", "DELETE")
export class DeleteInvoiceItems implements IReturn<IdResponse>, IDelete, IDeleteDb<InvoiceItems>
{
    public invoiceLineId: number;

    public constructor(init?: Partial<DeleteInvoiceItems>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'DeleteInvoiceItems'; }
}

// @Route("/invoices/{InvoiceId}", "DELETE")
export class DeleteInvoices implements IReturn<IdResponse>, IDelete, IDeleteDb<Invoices>
{
    public invoiceId: number;

    public constructor(init?: Partial<DeleteInvoices>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'DeleteInvoices'; }
}

// @Route("/mediatypes/{MediaTypeId}", "DELETE")
export class DeleteMediaTypes implements IReturn<IdResponse>, IDelete, IDeleteDb<MediaTypes>
{
    public mediaTypeId: number;

    public constructor(init?: Partial<DeleteMediaTypes>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'DeleteMediaTypes'; }
}

// @Route("/playlists/{PlaylistId}", "DELETE")
export class DeletePlaylists implements IReturn<IdResponse>, IDelete, IDeleteDb<Playlists>
{
    public playlistId: number;

    public constructor(init?: Partial<DeletePlaylists>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'DeletePlaylists'; }
}

// @Route("/tracks/{TrackId}", "DELETE")
export class DeleteTracks implements IReturn<IdResponse>, IDelete, IDeleteDb<Tracks>
{
    public trackId: number;

    public constructor(init?: Partial<DeleteTracks>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'DeleteTracks'; }
}

// @Route("/albums/{AlbumId}", "PATCH")
export class PatchAlbums implements IReturn<IdResponse>, IPatch, IPatchDb<Albums>
{
    public albumId: number;
    public title: string;
    public artistId: number;

    public constructor(init?: Partial<PatchAlbums>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'PatchAlbums'; }
}

// @Route("/artists/{ArtistId}", "PATCH")
export class PatchArtists implements IReturn<IdResponse>, IPatch, IPatchDb<Artists>
{
    public artistId: number;
    public name: string;

    public constructor(init?: Partial<PatchArtists>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'PatchArtists'; }
}

// @Route("/customers/{CustomerId}", "PATCH")
export class PatchCustomers implements IReturn<IdResponse>, IPatch, IPatchDb<Customers>
{
    public customerId: number;
    public firstName: string;
    public lastName: string;
    public company: string;
    public address: string;
    public city: string;
    public state: string;
    public country: string;
    public postalCode: string;
    public phone: string;
    public fax: string;
    public email: string;
    public supportRepId?: number;

    public constructor(init?: Partial<PatchCustomers>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'PatchCustomers'; }
}

// @Route("/employees/{EmployeeId}", "PATCH")
export class PatchEmployees implements IReturn<IdResponse>, IPatch, IPatchDb<Employees>
{
    public employeeId: number;
    public lastName: string;
    public firstName: string;
    public title: string;
    public reportsTo?: number;
    public birthDate?: string;
    public hireDate?: string;
    public address: string;
    public city: string;
    public state: string;
    public country: string;
    public postalCode: string;
    public phone: string;
    public fax: string;
    public email: string;

    public constructor(init?: Partial<PatchEmployees>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'PatchEmployees'; }
}

// @Route("/genres/{GenreId}", "PATCH")
export class PatchGenres implements IReturn<IdResponse>, IPatch, IPatchDb<Genres>
{
    public genreId: number;
    public name: string;

    public constructor(init?: Partial<PatchGenres>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'PatchGenres'; }
}

// @Route("/invoiceitems/{InvoiceLineId}", "PATCH")
export class PatchInvoiceItems implements IReturn<IdResponse>, IPatch, IPatchDb<InvoiceItems>
{
    public invoiceLineId: number;
    public invoiceId: number;
    public trackId: number;
    public unitPrice: number;
    public quantity: number;

    public constructor(init?: Partial<PatchInvoiceItems>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'PatchInvoiceItems'; }
}

// @Route("/invoices/{InvoiceId}", "PATCH")
export class PatchInvoices implements IReturn<IdResponse>, IPatch, IPatchDb<Invoices>
{
    public invoiceId: number;
    public customerId: number;
    public invoiceDate: string;
    public billingAddress: string;
    public billingCity: string;
    public billingState: string;
    public billingCountry: string;
    public billingPostalCode: string;
    public total: number;

    public constructor(init?: Partial<PatchInvoices>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'PatchInvoices'; }
}

// @Route("/mediatypes/{MediaTypeId}", "PATCH")
export class PatchMediaTypes implements IReturn<IdResponse>, IPatch, IPatchDb<MediaTypes>
{
    public mediaTypeId: number;
    public name: string;

    public constructor(init?: Partial<PatchMediaTypes>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'PatchMediaTypes'; }
}

// @Route("/playlists/{PlaylistId}", "PATCH")
export class PatchPlaylists implements IReturn<IdResponse>, IPatch, IPatchDb<Playlists>
{
    public playlistId: number;
    public name: string;

    public constructor(init?: Partial<PatchPlaylists>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'PatchPlaylists'; }
}

// @Route("/tracks/{TrackId}", "PATCH")
export class PatchTracks implements IReturn<IdResponse>, IPatch, IPatchDb<Tracks>
{
    public trackId: number;
    public name: string;
    public albumId?: number;
    public mediaTypeId: number;
    public genreId?: number;
    public composer: string;
    public milliseconds: number;
    public bytes?: number;
    public unitPrice: number;

    public constructor(init?: Partial<PatchTracks>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'PatchTracks'; }
}

// @Route("/albums/{AlbumId}", "PUT")
export class UpdateAlbums implements IReturn<IdResponse>, IPut, IUpdateDb<Albums>
{
    public albumId: number;
    public title: string;
    public artistId: number;

    public constructor(init?: Partial<UpdateAlbums>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'UpdateAlbums'; }
}

// @Route("/artists/{ArtistId}", "PUT")
export class UpdateArtists implements IReturn<IdResponse>, IPut, IUpdateDb<Artists>
{
    public artistId: number;
    public name: string;

    public constructor(init?: Partial<UpdateArtists>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'UpdateArtists'; }
}

// @Route("/customers/{CustomerId}", "PUT")
export class UpdateCustomers implements IReturn<IdResponse>, IPut, IUpdateDb<Customers>
{
    public customerId: number;
    public firstName: string;
    public lastName: string;
    public company: string;
    public address: string;
    public city: string;
    public state: string;
    public country: string;
    public postalCode: string;
    public phone: string;
    public fax: string;
    public email: string;
    public supportRepId?: number;

    public constructor(init?: Partial<UpdateCustomers>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'UpdateCustomers'; }
}

// @Route("/employees/{EmployeeId}", "PUT")
export class UpdateEmployees implements IReturn<IdResponse>, IPut, IUpdateDb<Employees>
{
    public employeeId: number;
    public lastName: string;
    public firstName: string;
    public title: string;
    public reportsTo?: number;
    public birthDate?: string;
    public hireDate?: string;
    public address: string;
    public city: string;
    public state: string;
    public country: string;
    public postalCode: string;
    public phone: string;
    public fax: string;
    public email: string;

    public constructor(init?: Partial<UpdateEmployees>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'UpdateEmployees'; }
}

// @Route("/genres/{GenreId}", "PUT")
export class UpdateGenres implements IReturn<IdResponse>, IPut, IUpdateDb<Genres>
{
    public genreId: number;
    public name: string;

    public constructor(init?: Partial<UpdateGenres>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'UpdateGenres'; }
}

// @Route("/invoiceitems/{InvoiceLineId}", "PUT")
export class UpdateInvoiceItems implements IReturn<IdResponse>, IPut, IUpdateDb<InvoiceItems>
{
    public invoiceLineId: number;
    public invoiceId: number;
    public trackId: number;
    public unitPrice: number;
    public quantity: number;

    public constructor(init?: Partial<UpdateInvoiceItems>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'UpdateInvoiceItems'; }
}

// @Route("/invoices/{InvoiceId}", "PUT")
export class UpdateInvoices implements IReturn<IdResponse>, IPut, IUpdateDb<Invoices>
{
    public invoiceId: number;
    public customerId: number;
    public invoiceDate: string;
    public billingAddress: string;
    public billingCity: string;
    public billingState: string;
    public billingCountry: string;
    public billingPostalCode: string;
    public total: number;

    public constructor(init?: Partial<UpdateInvoices>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'UpdateInvoices'; }
}

// @Route("/mediatypes/{MediaTypeId}", "PUT")
export class UpdateMediaTypes implements IReturn<IdResponse>, IPut, IUpdateDb<MediaTypes>
{
    public mediaTypeId: number;
    public name: string;

    public constructor(init?: Partial<UpdateMediaTypes>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'UpdateMediaTypes'; }
}

// @Route("/playlists/{PlaylistId}", "PUT")
export class UpdatePlaylists implements IReturn<IdResponse>, IPut, IUpdateDb<Playlists>
{
    public playlistId: number;
    public name: string;

    public constructor(init?: Partial<UpdatePlaylists>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'UpdatePlaylists'; }
}

// @Route("/tracks/{TrackId}", "PUT")
export class UpdateTracks implements IReturn<IdResponse>, IPut, IUpdateDb<Tracks>
{
    public trackId: number;
    public name: string;
    public albumId?: number;
    public mediaTypeId: number;
    public genreId?: number;
    public composer: string;
    public milliseconds: number;
    public bytes?: number;
    public unitPrice: number;

    public constructor(init?: Partial<UpdateTracks>) { (Object as any).assign(this, init); }
    public createResponse() { return new IdResponse(); }
    public getTypeName() { return 'UpdateTracks'; }
}

