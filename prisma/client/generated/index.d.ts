
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Users
 */

export type Users = {
  id: string
  name: string
  lastName: string
  email: string
  password: string
  phoneNumber: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Companies
 */

export type Companies = {
  id: string
  name: string
  email: string
  phoneNumber: string
  address: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model RefreshTokens
 */

export type RefreshTokens = {
  id: string
  expiresIn: number
  userId: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Tickets
 */

export type Tickets = {
  id: string
  price: Prisma.Decimal
  companyId: string
  purchaseLimit: number
  deadline: Date
}

/**
 * Model UsersTickets
 */

export type UsersTickets = {
  id: string
  userId: string
  ticketId: string
  quantity: number
}

/**
 * Model Events
 */

export type Events = {
  id: string
  name: string
  description: string
  companyId: string
  ticketId: string
  eventDate: Date
  createdAt: Date
  updatedAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<GlobalReject>;

  /**
   * `prisma.companies`: Exposes CRUD operations for the **Companies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.companies.findMany()
    * ```
    */
  get companies(): Prisma.CompaniesDelegate<GlobalReject>;

  /**
   * `prisma.refreshTokens`: Exposes CRUD operations for the **RefreshTokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshTokens.findMany()
    * ```
    */
  get refreshTokens(): Prisma.RefreshTokensDelegate<GlobalReject>;

  /**
   * `prisma.tickets`: Exposes CRUD operations for the **Tickets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.tickets.findMany()
    * ```
    */
  get tickets(): Prisma.TicketsDelegate<GlobalReject>;

  /**
   * `prisma.usersTickets`: Exposes CRUD operations for the **UsersTickets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsersTickets
    * const usersTickets = await prisma.usersTickets.findMany()
    * ```
    */
  get usersTickets(): Prisma.UsersTicketsDelegate<GlobalReject>;

  /**
   * `prisma.events`: Exposes CRUD operations for the **Events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.events.findMany()
    * ```
    */
  get events(): Prisma.EventsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.1.1
   * Query Engine version: c22652b7e418506fab23052d569b85d3aec4883f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Users: 'Users',
    Companies: 'Companies',
    RefreshTokens: 'RefreshTokens',
    Tickets: 'Tickets',
    UsersTickets: 'UsersTickets',
    Events: 'Events'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    lastName: string | null
    email: string | null
    password: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    lastName: string | null
    email: string | null
    password: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    lastName: number
    email: number
    password: number
    phoneNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    email?: true
    password?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    email?: true
    password?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    email?: true
    password?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which Users to aggregate.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }


    
    
  export type UsersGroupByArgs = {
    where?: UsersWhereInput
    orderBy?: Enumerable<UsersOrderByWithAggregationInput>
    by: Array<UsersScalarFieldEnum>
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    id: string
    name: string
    lastName: string
    email: string
    password: string
    phoneNumber: string
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Promise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], UsersGroupByOutputType[P]> 
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      > 
    >


  export type UsersSelect = {
    id?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    RefreshToken?: boolean | RefreshTokensArgs
    UsersTickets?: boolean | UsersTicketsArgs
  }

  export type UsersInclude = {
    RefreshToken?: boolean | RefreshTokensArgs
    UsersTickets?: boolean | UsersTicketsArgs
  }

  export type UsersGetPayload<
    S extends boolean | null | undefined | UsersArgs,
    U = keyof S
      > = S extends true
        ? Users
    : S extends undefined
    ? never
    : S extends UsersArgs | UsersFindManyArgs
    ?'include' extends U
    ? Users  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'RefreshToken'
        ? RefreshTokensGetPayload<S['include'][P]> | null :
        P extends 'UsersTickets'
        ? UsersTicketsGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Users ?Users [P]
  : 
          P extends 'RefreshToken'
        ? RefreshTokensGetPayload<S['select'][P]> | null :
        P extends 'UsersTickets'
        ? UsersTicketsGetPayload<S['select'][P]> | null : never
  } 
    : Users
  : Users


  type UsersCountArgs = Merge<
    Omit<UsersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }
  >

  export interface UsersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UsersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Users'> extends True ? CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>> : CheckSelect<T, Prisma__UsersClient<Users | null >, Prisma__UsersClient<UsersGetPayload<T> | null >>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UsersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Users'> extends True ? CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>> : CheckSelect<T, Prisma__UsersClient<Users | null >, Prisma__UsersClient<UsersGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsersFindManyArgs>(
      args?: SelectSubset<T, UsersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Users>>, PrismaPromise<Array<UsersGetPayload<T>>>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs>(
      args: SelectSubset<T, UsersCreateArgs>
    ): CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UsersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersCreateManyArgs>(
      args?: SelectSubset<T, UsersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs>(
      args: SelectSubset<T, UsersDeleteArgs>
    ): CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersUpdateArgs>(
      args: SelectSubset<T, UsersUpdateArgs>
    ): CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs>(
      args?: SelectSubset<T, UsersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersUpdateManyArgs>(
      args: SelectSubset<T, UsersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends UsersUpsertArgs>(
      args: SelectSubset<T, UsersUpsertArgs>
    ): CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UsersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    RefreshToken<T extends RefreshTokensArgs = {}>(args?: Subset<T, RefreshTokensArgs>): CheckSelect<T, Prisma__RefreshTokensClient<RefreshTokens | null >, Prisma__RefreshTokensClient<RefreshTokensGetPayload<T> | null >>;

    UsersTickets<T extends UsersTicketsArgs = {}>(args?: Subset<T, UsersTicketsArgs>): CheckSelect<T, Prisma__UsersTicketsClient<UsersTickets | null >, Prisma__UsersTicketsClient<UsersTicketsGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Throw an Error if a Users can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where: UsersWhereUniqueInput
  }


  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Throw an Error if a Users can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users findMany
   */
  export type UsersFindManyArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users create
   */
  export type UsersCreateArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * The data needed to create a Users.
     * 
    **/
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }


  /**
   * Users createMany
   */
  export type UsersCreateManyArgs = {
    data: Enumerable<UsersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Users update
   */
  export type UsersUpdateArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * The data needed to update a Users.
     * 
    **/
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     * 
    **/
    where: UsersWhereUniqueInput
  }


  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs = {
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    where?: UsersWhereInput
  }


  /**
   * Users upsert
   */
  export type UsersUpsertArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * The filter to search for the Users to update in case it exists.
     * 
    **/
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     * 
    **/
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }


  /**
   * Users delete
   */
  export type UsersDeleteArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Filter which Users to delete.
     * 
    **/
    where: UsersWhereUniqueInput
  }


  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs = {
    where?: UsersWhereInput
  }


  /**
   * Users without action
   */
  export type UsersArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
  }



  /**
   * Model Companies
   */


  export type AggregateCompanies = {
    _count: CompaniesCountAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  export type CompaniesMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompaniesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompaniesCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phoneNumber: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompaniesMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompaniesMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompaniesCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompaniesAggregateArgs = {
    /**
     * Filter which Companies to aggregate.
     * 
    **/
    where?: CompaniesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     * 
    **/
    orderBy?: Enumerable<CompaniesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CompaniesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompaniesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompaniesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompaniesMaxAggregateInputType
  }

  export type GetCompaniesAggregateType<T extends CompaniesAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanies[P]>
      : GetScalarType<T[P], AggregateCompanies[P]>
  }


    
    
  export type CompaniesGroupByArgs = {
    where?: CompaniesWhereInput
    orderBy?: Enumerable<CompaniesOrderByWithAggregationInput>
    by: Array<CompaniesScalarFieldEnum>
    having?: CompaniesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompaniesCountAggregateInputType | true
    _min?: CompaniesMinAggregateInputType
    _max?: CompaniesMaxAggregateInputType
  }


  export type CompaniesGroupByOutputType = {
    id: string
    name: string
    email: string
    phoneNumber: string
    address: string
    createdAt: Date
    updatedAt: Date
    _count: CompaniesCountAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  type GetCompaniesGroupByPayload<T extends CompaniesGroupByArgs> = Promise<
    Array<
      PickArray<CompaniesGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof CompaniesGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], CompaniesGroupByOutputType[P]> 
            : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
        }
      > 
    >


  export type CompaniesSelect = {
    Tickets?: boolean | TicketsArgs
    Events?: boolean | EventsArgs
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompaniesInclude = {
    Tickets?: boolean | TicketsArgs
    Events?: boolean | EventsArgs
  }

  export type CompaniesGetPayload<
    S extends boolean | null | undefined | CompaniesArgs,
    U = keyof S
      > = S extends true
        ? Companies
    : S extends undefined
    ? never
    : S extends CompaniesArgs | CompaniesFindManyArgs
    ?'include' extends U
    ? Companies  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Tickets'
        ? TicketsGetPayload<S['include'][P]> | null :
        P extends 'Events'
        ? EventsGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Companies ?Companies [P]
  : 
          P extends 'Tickets'
        ? TicketsGetPayload<S['select'][P]> | null :
        P extends 'Events'
        ? EventsGetPayload<S['select'][P]> | null : never
  } 
    : Companies
  : Companies


  type CompaniesCountArgs = Merge<
    Omit<CompaniesFindManyArgs, 'select' | 'include'> & {
      select?: CompaniesCountAggregateInputType | true
    }
  >

  export interface CompaniesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Companies that matches the filter.
     * @param {CompaniesFindUniqueArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CompaniesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CompaniesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Companies'> extends True ? CheckSelect<T, Prisma__CompaniesClient<Companies>, Prisma__CompaniesClient<CompaniesGetPayload<T>>> : CheckSelect<T, Prisma__CompaniesClient<Companies | null >, Prisma__CompaniesClient<CompaniesGetPayload<T> | null >>

    /**
     * Find the first Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesFindFirstArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CompaniesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CompaniesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Companies'> extends True ? CheckSelect<T, Prisma__CompaniesClient<Companies>, Prisma__CompaniesClient<CompaniesGetPayload<T>>> : CheckSelect<T, Prisma__CompaniesClient<Companies | null >, Prisma__CompaniesClient<CompaniesGetPayload<T> | null >>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.companies.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.companies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companiesWithIdOnly = await prisma.companies.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CompaniesFindManyArgs>(
      args?: SelectSubset<T, CompaniesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Companies>>, PrismaPromise<Array<CompaniesGetPayload<T>>>>

    /**
     * Create a Companies.
     * @param {CompaniesCreateArgs} args - Arguments to create a Companies.
     * @example
     * // Create one Companies
     * const Companies = await prisma.companies.create({
     *   data: {
     *     // ... data to create a Companies
     *   }
     * })
     * 
    **/
    create<T extends CompaniesCreateArgs>(
      args: SelectSubset<T, CompaniesCreateArgs>
    ): CheckSelect<T, Prisma__CompaniesClient<Companies>, Prisma__CompaniesClient<CompaniesGetPayload<T>>>

    /**
     * Create many Companies.
     *     @param {CompaniesCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const companies = await prisma.companies.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CompaniesCreateManyArgs>(
      args?: SelectSubset<T, CompaniesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Companies.
     * @param {CompaniesDeleteArgs} args - Arguments to delete one Companies.
     * @example
     * // Delete one Companies
     * const Companies = await prisma.companies.delete({
     *   where: {
     *     // ... filter to delete one Companies
     *   }
     * })
     * 
    **/
    delete<T extends CompaniesDeleteArgs>(
      args: SelectSubset<T, CompaniesDeleteArgs>
    ): CheckSelect<T, Prisma__CompaniesClient<Companies>, Prisma__CompaniesClient<CompaniesGetPayload<T>>>

    /**
     * Update one Companies.
     * @param {CompaniesUpdateArgs} args - Arguments to update one Companies.
     * @example
     * // Update one Companies
     * const companies = await prisma.companies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CompaniesUpdateArgs>(
      args: SelectSubset<T, CompaniesUpdateArgs>
    ): CheckSelect<T, Prisma__CompaniesClient<Companies>, Prisma__CompaniesClient<CompaniesGetPayload<T>>>

    /**
     * Delete zero or more Companies.
     * @param {CompaniesDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.companies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CompaniesDeleteManyArgs>(
      args?: SelectSubset<T, CompaniesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const companies = await prisma.companies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CompaniesUpdateManyArgs>(
      args: SelectSubset<T, CompaniesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Companies.
     * @param {CompaniesUpsertArgs} args - Arguments to update or create a Companies.
     * @example
     * // Update or create a Companies
     * const companies = await prisma.companies.upsert({
     *   create: {
     *     // ... data to create a Companies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Companies we want to update
     *   }
     * })
    **/
    upsert<T extends CompaniesUpsertArgs>(
      args: SelectSubset<T, CompaniesUpsertArgs>
    ): CheckSelect<T, Prisma__CompaniesClient<Companies>, Prisma__CompaniesClient<CompaniesGetPayload<T>>>

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.companies.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompaniesCountArgs>(
      args?: Subset<T, CompaniesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompaniesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompaniesAggregateArgs>(args: Subset<T, CompaniesAggregateArgs>): PrismaPromise<GetCompaniesAggregateType<T>>

    /**
     * Group by Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompaniesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompaniesGroupByArgs['orderBy'] }
        : { orderBy?: CompaniesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompaniesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompaniesGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Companies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CompaniesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Tickets<T extends TicketsArgs = {}>(args?: Subset<T, TicketsArgs>): CheckSelect<T, Prisma__TicketsClient<Tickets | null >, Prisma__TicketsClient<TicketsGetPayload<T> | null >>;

    Events<T extends EventsArgs = {}>(args?: Subset<T, EventsArgs>): CheckSelect<T, Prisma__EventsClient<Events | null >, Prisma__EventsClient<EventsGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Companies findUnique
   */
  export type CompaniesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Companies
     * 
    **/
    select?: CompaniesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompaniesInclude | null
    /**
     * Throw an Error if a Companies can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Companies to fetch.
     * 
    **/
    where: CompaniesWhereUniqueInput
  }


  /**
   * Companies findFirst
   */
  export type CompaniesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Companies
     * 
    **/
    select?: CompaniesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompaniesInclude | null
    /**
     * Throw an Error if a Companies can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Companies to fetch.
     * 
    **/
    where?: CompaniesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     * 
    **/
    orderBy?: Enumerable<CompaniesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     * 
    **/
    cursor?: CompaniesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     * 
    **/
    distinct?: Enumerable<CompaniesScalarFieldEnum>
  }


  /**
   * Companies findMany
   */
  export type CompaniesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Companies
     * 
    **/
    select?: CompaniesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompaniesInclude | null
    /**
     * Filter, which Companies to fetch.
     * 
    **/
    where?: CompaniesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     * 
    **/
    orderBy?: Enumerable<CompaniesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     * 
    **/
    cursor?: CompaniesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CompaniesScalarFieldEnum>
  }


  /**
   * Companies create
   */
  export type CompaniesCreateArgs = {
    /**
     * Select specific fields to fetch from the Companies
     * 
    **/
    select?: CompaniesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompaniesInclude | null
    /**
     * The data needed to create a Companies.
     * 
    **/
    data: XOR<CompaniesCreateInput, CompaniesUncheckedCreateInput>
  }


  /**
   * Companies createMany
   */
  export type CompaniesCreateManyArgs = {
    data: Enumerable<CompaniesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Companies update
   */
  export type CompaniesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Companies
     * 
    **/
    select?: CompaniesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompaniesInclude | null
    /**
     * The data needed to update a Companies.
     * 
    **/
    data: XOR<CompaniesUpdateInput, CompaniesUncheckedUpdateInput>
    /**
     * Choose, which Companies to update.
     * 
    **/
    where: CompaniesWhereUniqueInput
  }


  /**
   * Companies updateMany
   */
  export type CompaniesUpdateManyArgs = {
    data: XOR<CompaniesUpdateManyMutationInput, CompaniesUncheckedUpdateManyInput>
    where?: CompaniesWhereInput
  }


  /**
   * Companies upsert
   */
  export type CompaniesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Companies
     * 
    **/
    select?: CompaniesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompaniesInclude | null
    /**
     * The filter to search for the Companies to update in case it exists.
     * 
    **/
    where: CompaniesWhereUniqueInput
    /**
     * In case the Companies found by the `where` argument doesn't exist, create a new Companies with this data.
     * 
    **/
    create: XOR<CompaniesCreateInput, CompaniesUncheckedCreateInput>
    /**
     * In case the Companies was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CompaniesUpdateInput, CompaniesUncheckedUpdateInput>
  }


  /**
   * Companies delete
   */
  export type CompaniesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Companies
     * 
    **/
    select?: CompaniesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompaniesInclude | null
    /**
     * Filter which Companies to delete.
     * 
    **/
    where: CompaniesWhereUniqueInput
  }


  /**
   * Companies deleteMany
   */
  export type CompaniesDeleteManyArgs = {
    where?: CompaniesWhereInput
  }


  /**
   * Companies without action
   */
  export type CompaniesArgs = {
    /**
     * Select specific fields to fetch from the Companies
     * 
    **/
    select?: CompaniesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompaniesInclude | null
  }



  /**
   * Model RefreshTokens
   */


  export type AggregateRefreshTokens = {
    _count: RefreshTokensCountAggregateOutputType | null
    _avg: RefreshTokensAvgAggregateOutputType | null
    _sum: RefreshTokensSumAggregateOutputType | null
    _min: RefreshTokensMinAggregateOutputType | null
    _max: RefreshTokensMaxAggregateOutputType | null
  }

  export type RefreshTokensAvgAggregateOutputType = {
    expiresIn: number | null
  }

  export type RefreshTokensSumAggregateOutputType = {
    expiresIn: number | null
  }

  export type RefreshTokensMinAggregateOutputType = {
    id: string | null
    expiresIn: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RefreshTokensMaxAggregateOutputType = {
    id: string | null
    expiresIn: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RefreshTokensCountAggregateOutputType = {
    id: number
    expiresIn: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RefreshTokensAvgAggregateInputType = {
    expiresIn?: true
  }

  export type RefreshTokensSumAggregateInputType = {
    expiresIn?: true
  }

  export type RefreshTokensMinAggregateInputType = {
    id?: true
    expiresIn?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RefreshTokensMaxAggregateInputType = {
    id?: true
    expiresIn?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RefreshTokensCountAggregateInputType = {
    id?: true
    expiresIn?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RefreshTokensAggregateArgs = {
    /**
     * Filter which RefreshTokens to aggregate.
     * 
    **/
    where?: RefreshTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<RefreshTokensOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RefreshTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefreshTokensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefreshTokensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokensMaxAggregateInputType
  }

  export type GetRefreshTokensAggregateType<T extends RefreshTokensAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshTokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshTokens[P]>
      : GetScalarType<T[P], AggregateRefreshTokens[P]>
  }


    
    
  export type RefreshTokensGroupByArgs = {
    where?: RefreshTokensWhereInput
    orderBy?: Enumerable<RefreshTokensOrderByWithAggregationInput>
    by: Array<RefreshTokensScalarFieldEnum>
    having?: RefreshTokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokensCountAggregateInputType | true
    _avg?: RefreshTokensAvgAggregateInputType
    _sum?: RefreshTokensSumAggregateInputType
    _min?: RefreshTokensMinAggregateInputType
    _max?: RefreshTokensMaxAggregateInputType
  }


  export type RefreshTokensGroupByOutputType = {
    id: string
    expiresIn: number
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: RefreshTokensCountAggregateOutputType | null
    _avg: RefreshTokensAvgAggregateOutputType | null
    _sum: RefreshTokensSumAggregateOutputType | null
    _min: RefreshTokensMinAggregateOutputType | null
    _max: RefreshTokensMaxAggregateOutputType | null
  }

  type GetRefreshTokensGroupByPayload<T extends RefreshTokensGroupByArgs> = Promise<
    Array<
      PickArray<RefreshTokensGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof RefreshTokensGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], RefreshTokensGroupByOutputType[P]> 
            : GetScalarType<T[P], RefreshTokensGroupByOutputType[P]>
        }
      > 
    >


  export type RefreshTokensSelect = {
    user?: boolean | UsersArgs
    id?: boolean
    expiresIn?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RefreshTokensInclude = {
    user?: boolean | UsersArgs
  }

  export type RefreshTokensGetPayload<
    S extends boolean | null | undefined | RefreshTokensArgs,
    U = keyof S
      > = S extends true
        ? RefreshTokens
    : S extends undefined
    ? never
    : S extends RefreshTokensArgs | RefreshTokensFindManyArgs
    ?'include' extends U
    ? RefreshTokens  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'user'
        ? UsersGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof RefreshTokens ?RefreshTokens [P]
  : 
          P extends 'user'
        ? UsersGetPayload<S['select'][P]> : never
  } 
    : RefreshTokens
  : RefreshTokens


  type RefreshTokensCountArgs = Merge<
    Omit<RefreshTokensFindManyArgs, 'select' | 'include'> & {
      select?: RefreshTokensCountAggregateInputType | true
    }
  >

  export interface RefreshTokensDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one RefreshTokens that matches the filter.
     * @param {RefreshTokensFindUniqueArgs} args - Arguments to find a RefreshTokens
     * @example
     * // Get one RefreshTokens
     * const refreshTokens = await prisma.refreshTokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RefreshTokensFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RefreshTokensFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RefreshTokens'> extends True ? CheckSelect<T, Prisma__RefreshTokensClient<RefreshTokens>, Prisma__RefreshTokensClient<RefreshTokensGetPayload<T>>> : CheckSelect<T, Prisma__RefreshTokensClient<RefreshTokens | null >, Prisma__RefreshTokensClient<RefreshTokensGetPayload<T> | null >>

    /**
     * Find the first RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokensFindFirstArgs} args - Arguments to find a RefreshTokens
     * @example
     * // Get one RefreshTokens
     * const refreshTokens = await prisma.refreshTokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RefreshTokensFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RefreshTokensFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RefreshTokens'> extends True ? CheckSelect<T, Prisma__RefreshTokensClient<RefreshTokens>, Prisma__RefreshTokensClient<RefreshTokensGetPayload<T>>> : CheckSelect<T, Prisma__RefreshTokensClient<RefreshTokens | null >, Prisma__RefreshTokensClient<RefreshTokensGetPayload<T> | null >>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokensFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshTokens.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshTokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokensWithIdOnly = await prisma.refreshTokens.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RefreshTokensFindManyArgs>(
      args?: SelectSubset<T, RefreshTokensFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<RefreshTokens>>, PrismaPromise<Array<RefreshTokensGetPayload<T>>>>

    /**
     * Create a RefreshTokens.
     * @param {RefreshTokensCreateArgs} args - Arguments to create a RefreshTokens.
     * @example
     * // Create one RefreshTokens
     * const RefreshTokens = await prisma.refreshTokens.create({
     *   data: {
     *     // ... data to create a RefreshTokens
     *   }
     * })
     * 
    **/
    create<T extends RefreshTokensCreateArgs>(
      args: SelectSubset<T, RefreshTokensCreateArgs>
    ): CheckSelect<T, Prisma__RefreshTokensClient<RefreshTokens>, Prisma__RefreshTokensClient<RefreshTokensGetPayload<T>>>

    /**
     * Create many RefreshTokens.
     *     @param {RefreshTokensCreateManyArgs} args - Arguments to create many RefreshTokens.
     *     @example
     *     // Create many RefreshTokens
     *     const refreshTokens = await prisma.refreshTokens.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RefreshTokensCreateManyArgs>(
      args?: SelectSubset<T, RefreshTokensCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a RefreshTokens.
     * @param {RefreshTokensDeleteArgs} args - Arguments to delete one RefreshTokens.
     * @example
     * // Delete one RefreshTokens
     * const RefreshTokens = await prisma.refreshTokens.delete({
     *   where: {
     *     // ... filter to delete one RefreshTokens
     *   }
     * })
     * 
    **/
    delete<T extends RefreshTokensDeleteArgs>(
      args: SelectSubset<T, RefreshTokensDeleteArgs>
    ): CheckSelect<T, Prisma__RefreshTokensClient<RefreshTokens>, Prisma__RefreshTokensClient<RefreshTokensGetPayload<T>>>

    /**
     * Update one RefreshTokens.
     * @param {RefreshTokensUpdateArgs} args - Arguments to update one RefreshTokens.
     * @example
     * // Update one RefreshTokens
     * const refreshTokens = await prisma.refreshTokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RefreshTokensUpdateArgs>(
      args: SelectSubset<T, RefreshTokensUpdateArgs>
    ): CheckSelect<T, Prisma__RefreshTokensClient<RefreshTokens>, Prisma__RefreshTokensClient<RefreshTokensGetPayload<T>>>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokensDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshTokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RefreshTokensDeleteManyArgs>(
      args?: SelectSubset<T, RefreshTokensDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshTokens = await prisma.refreshTokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RefreshTokensUpdateManyArgs>(
      args: SelectSubset<T, RefreshTokensUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one RefreshTokens.
     * @param {RefreshTokensUpsertArgs} args - Arguments to update or create a RefreshTokens.
     * @example
     * // Update or create a RefreshTokens
     * const refreshTokens = await prisma.refreshTokens.upsert({
     *   create: {
     *     // ... data to create a RefreshTokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshTokens we want to update
     *   }
     * })
    **/
    upsert<T extends RefreshTokensUpsertArgs>(
      args: SelectSubset<T, RefreshTokensUpsertArgs>
    ): CheckSelect<T, Prisma__RefreshTokensClient<RefreshTokens>, Prisma__RefreshTokensClient<RefreshTokensGetPayload<T>>>

    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokensCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshTokens.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokensCountArgs>(
      args?: Subset<T, RefreshTokensCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokensAggregateArgs>(args: Subset<T, RefreshTokensAggregateArgs>): PrismaPromise<GetRefreshTokensAggregateType<T>>

    /**
     * Group by RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokensGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokensGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshTokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RefreshTokensClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UsersArgs = {}>(args?: Subset<T, UsersArgs>): CheckSelect<T, Prisma__UsersClient<Users | null >, Prisma__UsersClient<UsersGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * RefreshTokens findUnique
   */
  export type RefreshTokensFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the RefreshTokens
     * 
    **/
    select?: RefreshTokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshTokensInclude | null
    /**
     * Throw an Error if a RefreshTokens can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which RefreshTokens to fetch.
     * 
    **/
    where: RefreshTokensWhereUniqueInput
  }


  /**
   * RefreshTokens findFirst
   */
  export type RefreshTokensFindFirstArgs = {
    /**
     * Select specific fields to fetch from the RefreshTokens
     * 
    **/
    select?: RefreshTokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshTokensInclude | null
    /**
     * Throw an Error if a RefreshTokens can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which RefreshTokens to fetch.
     * 
    **/
    where?: RefreshTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<RefreshTokensOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     * 
    **/
    cursor?: RefreshTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     * 
    **/
    distinct?: Enumerable<RefreshTokensScalarFieldEnum>
  }


  /**
   * RefreshTokens findMany
   */
  export type RefreshTokensFindManyArgs = {
    /**
     * Select specific fields to fetch from the RefreshTokens
     * 
    **/
    select?: RefreshTokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshTokensInclude | null
    /**
     * Filter, which RefreshTokens to fetch.
     * 
    **/
    where?: RefreshTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<RefreshTokensOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     * 
    **/
    cursor?: RefreshTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RefreshTokensScalarFieldEnum>
  }


  /**
   * RefreshTokens create
   */
  export type RefreshTokensCreateArgs = {
    /**
     * Select specific fields to fetch from the RefreshTokens
     * 
    **/
    select?: RefreshTokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshTokensInclude | null
    /**
     * The data needed to create a RefreshTokens.
     * 
    **/
    data: XOR<RefreshTokensCreateInput, RefreshTokensUncheckedCreateInput>
  }


  /**
   * RefreshTokens createMany
   */
  export type RefreshTokensCreateManyArgs = {
    data: Enumerable<RefreshTokensCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RefreshTokens update
   */
  export type RefreshTokensUpdateArgs = {
    /**
     * Select specific fields to fetch from the RefreshTokens
     * 
    **/
    select?: RefreshTokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshTokensInclude | null
    /**
     * The data needed to update a RefreshTokens.
     * 
    **/
    data: XOR<RefreshTokensUpdateInput, RefreshTokensUncheckedUpdateInput>
    /**
     * Choose, which RefreshTokens to update.
     * 
    **/
    where: RefreshTokensWhereUniqueInput
  }


  /**
   * RefreshTokens updateMany
   */
  export type RefreshTokensUpdateManyArgs = {
    data: XOR<RefreshTokensUpdateManyMutationInput, RefreshTokensUncheckedUpdateManyInput>
    where?: RefreshTokensWhereInput
  }


  /**
   * RefreshTokens upsert
   */
  export type RefreshTokensUpsertArgs = {
    /**
     * Select specific fields to fetch from the RefreshTokens
     * 
    **/
    select?: RefreshTokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshTokensInclude | null
    /**
     * The filter to search for the RefreshTokens to update in case it exists.
     * 
    **/
    where: RefreshTokensWhereUniqueInput
    /**
     * In case the RefreshTokens found by the `where` argument doesn't exist, create a new RefreshTokens with this data.
     * 
    **/
    create: XOR<RefreshTokensCreateInput, RefreshTokensUncheckedCreateInput>
    /**
     * In case the RefreshTokens was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RefreshTokensUpdateInput, RefreshTokensUncheckedUpdateInput>
  }


  /**
   * RefreshTokens delete
   */
  export type RefreshTokensDeleteArgs = {
    /**
     * Select specific fields to fetch from the RefreshTokens
     * 
    **/
    select?: RefreshTokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshTokensInclude | null
    /**
     * Filter which RefreshTokens to delete.
     * 
    **/
    where: RefreshTokensWhereUniqueInput
  }


  /**
   * RefreshTokens deleteMany
   */
  export type RefreshTokensDeleteManyArgs = {
    where?: RefreshTokensWhereInput
  }


  /**
   * RefreshTokens without action
   */
  export type RefreshTokensArgs = {
    /**
     * Select specific fields to fetch from the RefreshTokens
     * 
    **/
    select?: RefreshTokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshTokensInclude | null
  }



  /**
   * Model Tickets
   */


  export type AggregateTickets = {
    _count: TicketsCountAggregateOutputType | null
    _avg: TicketsAvgAggregateOutputType | null
    _sum: TicketsSumAggregateOutputType | null
    _min: TicketsMinAggregateOutputType | null
    _max: TicketsMaxAggregateOutputType | null
  }

  export type TicketsAvgAggregateOutputType = {
    price: Decimal | null
    purchaseLimit: number | null
  }

  export type TicketsSumAggregateOutputType = {
    price: Decimal | null
    purchaseLimit: number | null
  }

  export type TicketsMinAggregateOutputType = {
    id: string | null
    price: Decimal | null
    companyId: string | null
    purchaseLimit: number | null
    deadline: Date | null
  }

  export type TicketsMaxAggregateOutputType = {
    id: string | null
    price: Decimal | null
    companyId: string | null
    purchaseLimit: number | null
    deadline: Date | null
  }

  export type TicketsCountAggregateOutputType = {
    id: number
    price: number
    companyId: number
    purchaseLimit: number
    deadline: number
    _all: number
  }


  export type TicketsAvgAggregateInputType = {
    price?: true
    purchaseLimit?: true
  }

  export type TicketsSumAggregateInputType = {
    price?: true
    purchaseLimit?: true
  }

  export type TicketsMinAggregateInputType = {
    id?: true
    price?: true
    companyId?: true
    purchaseLimit?: true
    deadline?: true
  }

  export type TicketsMaxAggregateInputType = {
    id?: true
    price?: true
    companyId?: true
    purchaseLimit?: true
    deadline?: true
  }

  export type TicketsCountAggregateInputType = {
    id?: true
    price?: true
    companyId?: true
    purchaseLimit?: true
    deadline?: true
    _all?: true
  }

  export type TicketsAggregateArgs = {
    /**
     * Filter which Tickets to aggregate.
     * 
    **/
    where?: TicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     * 
    **/
    orderBy?: Enumerable<TicketsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketsMaxAggregateInputType
  }

  export type GetTicketsAggregateType<T extends TicketsAggregateArgs> = {
        [P in keyof T & keyof AggregateTickets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTickets[P]>
      : GetScalarType<T[P], AggregateTickets[P]>
  }


    
    
  export type TicketsGroupByArgs = {
    where?: TicketsWhereInput
    orderBy?: Enumerable<TicketsOrderByWithAggregationInput>
    by: Array<TicketsScalarFieldEnum>
    having?: TicketsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketsCountAggregateInputType | true
    _avg?: TicketsAvgAggregateInputType
    _sum?: TicketsSumAggregateInputType
    _min?: TicketsMinAggregateInputType
    _max?: TicketsMaxAggregateInputType
  }


  export type TicketsGroupByOutputType = {
    id: string
    price: Decimal
    companyId: string
    purchaseLimit: number
    deadline: Date
    _count: TicketsCountAggregateOutputType | null
    _avg: TicketsAvgAggregateOutputType | null
    _sum: TicketsSumAggregateOutputType | null
    _min: TicketsMinAggregateOutputType | null
    _max: TicketsMaxAggregateOutputType | null
  }

  type GetTicketsGroupByPayload<T extends TicketsGroupByArgs> = Promise<
    Array<
      PickArray<TicketsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof TicketsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], TicketsGroupByOutputType[P]> 
            : GetScalarType<T[P], TicketsGroupByOutputType[P]>
        }
      > 
    >


  export type TicketsSelect = {
    company?: boolean | CompaniesArgs
    id?: boolean
    price?: boolean
    companyId?: boolean
    purchaseLimit?: boolean
    deadline?: boolean
    UsersTickets?: boolean | UsersTicketsArgs
    Events?: boolean | EventsArgs
  }

  export type TicketsInclude = {
    company?: boolean | CompaniesArgs
    UsersTickets?: boolean | UsersTicketsArgs
    Events?: boolean | EventsArgs
  }

  export type TicketsGetPayload<
    S extends boolean | null | undefined | TicketsArgs,
    U = keyof S
      > = S extends true
        ? Tickets
    : S extends undefined
    ? never
    : S extends TicketsArgs | TicketsFindManyArgs
    ?'include' extends U
    ? Tickets  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'company'
        ? CompaniesGetPayload<S['include'][P]> :
        P extends 'UsersTickets'
        ? UsersTicketsGetPayload<S['include'][P]> | null :
        P extends 'Events'
        ? EventsGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Tickets ?Tickets [P]
  : 
          P extends 'company'
        ? CompaniesGetPayload<S['select'][P]> :
        P extends 'UsersTickets'
        ? UsersTicketsGetPayload<S['select'][P]> | null :
        P extends 'Events'
        ? EventsGetPayload<S['select'][P]> | null : never
  } 
    : Tickets
  : Tickets


  type TicketsCountArgs = Merge<
    Omit<TicketsFindManyArgs, 'select' | 'include'> & {
      select?: TicketsCountAggregateInputType | true
    }
  >

  export interface TicketsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Tickets that matches the filter.
     * @param {TicketsFindUniqueArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TicketsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TicketsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Tickets'> extends True ? CheckSelect<T, Prisma__TicketsClient<Tickets>, Prisma__TicketsClient<TicketsGetPayload<T>>> : CheckSelect<T, Prisma__TicketsClient<Tickets | null >, Prisma__TicketsClient<TicketsGetPayload<T> | null >>

    /**
     * Find the first Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsFindFirstArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TicketsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TicketsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Tickets'> extends True ? CheckSelect<T, Prisma__TicketsClient<Tickets>, Prisma__TicketsClient<TicketsGetPayload<T>>> : CheckSelect<T, Prisma__TicketsClient<Tickets | null >, Prisma__TicketsClient<TicketsGetPayload<T> | null >>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.tickets.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.tickets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketsWithIdOnly = await prisma.tickets.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TicketsFindManyArgs>(
      args?: SelectSubset<T, TicketsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Tickets>>, PrismaPromise<Array<TicketsGetPayload<T>>>>

    /**
     * Create a Tickets.
     * @param {TicketsCreateArgs} args - Arguments to create a Tickets.
     * @example
     * // Create one Tickets
     * const Tickets = await prisma.tickets.create({
     *   data: {
     *     // ... data to create a Tickets
     *   }
     * })
     * 
    **/
    create<T extends TicketsCreateArgs>(
      args: SelectSubset<T, TicketsCreateArgs>
    ): CheckSelect<T, Prisma__TicketsClient<Tickets>, Prisma__TicketsClient<TicketsGetPayload<T>>>

    /**
     * Create many Tickets.
     *     @param {TicketsCreateManyArgs} args - Arguments to create many Tickets.
     *     @example
     *     // Create many Tickets
     *     const tickets = await prisma.tickets.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TicketsCreateManyArgs>(
      args?: SelectSubset<T, TicketsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Tickets.
     * @param {TicketsDeleteArgs} args - Arguments to delete one Tickets.
     * @example
     * // Delete one Tickets
     * const Tickets = await prisma.tickets.delete({
     *   where: {
     *     // ... filter to delete one Tickets
     *   }
     * })
     * 
    **/
    delete<T extends TicketsDeleteArgs>(
      args: SelectSubset<T, TicketsDeleteArgs>
    ): CheckSelect<T, Prisma__TicketsClient<Tickets>, Prisma__TicketsClient<TicketsGetPayload<T>>>

    /**
     * Update one Tickets.
     * @param {TicketsUpdateArgs} args - Arguments to update one Tickets.
     * @example
     * // Update one Tickets
     * const tickets = await prisma.tickets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TicketsUpdateArgs>(
      args: SelectSubset<T, TicketsUpdateArgs>
    ): CheckSelect<T, Prisma__TicketsClient<Tickets>, Prisma__TicketsClient<TicketsGetPayload<T>>>

    /**
     * Delete zero or more Tickets.
     * @param {TicketsDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.tickets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TicketsDeleteManyArgs>(
      args?: SelectSubset<T, TicketsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const tickets = await prisma.tickets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TicketsUpdateManyArgs>(
      args: SelectSubset<T, TicketsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Tickets.
     * @param {TicketsUpsertArgs} args - Arguments to update or create a Tickets.
     * @example
     * // Update or create a Tickets
     * const tickets = await prisma.tickets.upsert({
     *   create: {
     *     // ... data to create a Tickets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tickets we want to update
     *   }
     * })
    **/
    upsert<T extends TicketsUpsertArgs>(
      args: SelectSubset<T, TicketsUpsertArgs>
    ): CheckSelect<T, Prisma__TicketsClient<Tickets>, Prisma__TicketsClient<TicketsGetPayload<T>>>

    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.tickets.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketsCountArgs>(
      args?: Subset<T, TicketsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketsAggregateArgs>(args: Subset<T, TicketsAggregateArgs>): PrismaPromise<GetTicketsAggregateType<T>>

    /**
     * Group by Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketsGroupByArgs['orderBy'] }
        : { orderBy?: TicketsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tickets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TicketsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    company<T extends CompaniesArgs = {}>(args?: Subset<T, CompaniesArgs>): CheckSelect<T, Prisma__CompaniesClient<Companies | null >, Prisma__CompaniesClient<CompaniesGetPayload<T> | null >>;

    UsersTickets<T extends UsersTicketsArgs = {}>(args?: Subset<T, UsersTicketsArgs>): CheckSelect<T, Prisma__UsersTicketsClient<UsersTickets | null >, Prisma__UsersTicketsClient<UsersTicketsGetPayload<T> | null >>;

    Events<T extends EventsArgs = {}>(args?: Subset<T, EventsArgs>): CheckSelect<T, Prisma__EventsClient<Events | null >, Prisma__EventsClient<EventsGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Tickets findUnique
   */
  export type TicketsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Tickets
     * 
    **/
    select?: TicketsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TicketsInclude | null
    /**
     * Throw an Error if a Tickets can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Tickets to fetch.
     * 
    **/
    where: TicketsWhereUniqueInput
  }


  /**
   * Tickets findFirst
   */
  export type TicketsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Tickets
     * 
    **/
    select?: TicketsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TicketsInclude | null
    /**
     * Throw an Error if a Tickets can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Tickets to fetch.
     * 
    **/
    where?: TicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     * 
    **/
    orderBy?: Enumerable<TicketsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     * 
    **/
    cursor?: TicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     * 
    **/
    distinct?: Enumerable<TicketsScalarFieldEnum>
  }


  /**
   * Tickets findMany
   */
  export type TicketsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Tickets
     * 
    **/
    select?: TicketsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TicketsInclude | null
    /**
     * Filter, which Tickets to fetch.
     * 
    **/
    where?: TicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     * 
    **/
    orderBy?: Enumerable<TicketsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     * 
    **/
    cursor?: TicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TicketsScalarFieldEnum>
  }


  /**
   * Tickets create
   */
  export type TicketsCreateArgs = {
    /**
     * Select specific fields to fetch from the Tickets
     * 
    **/
    select?: TicketsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TicketsInclude | null
    /**
     * The data needed to create a Tickets.
     * 
    **/
    data: XOR<TicketsCreateInput, TicketsUncheckedCreateInput>
  }


  /**
   * Tickets createMany
   */
  export type TicketsCreateManyArgs = {
    data: Enumerable<TicketsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Tickets update
   */
  export type TicketsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Tickets
     * 
    **/
    select?: TicketsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TicketsInclude | null
    /**
     * The data needed to update a Tickets.
     * 
    **/
    data: XOR<TicketsUpdateInput, TicketsUncheckedUpdateInput>
    /**
     * Choose, which Tickets to update.
     * 
    **/
    where: TicketsWhereUniqueInput
  }


  /**
   * Tickets updateMany
   */
  export type TicketsUpdateManyArgs = {
    data: XOR<TicketsUpdateManyMutationInput, TicketsUncheckedUpdateManyInput>
    where?: TicketsWhereInput
  }


  /**
   * Tickets upsert
   */
  export type TicketsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Tickets
     * 
    **/
    select?: TicketsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TicketsInclude | null
    /**
     * The filter to search for the Tickets to update in case it exists.
     * 
    **/
    where: TicketsWhereUniqueInput
    /**
     * In case the Tickets found by the `where` argument doesn't exist, create a new Tickets with this data.
     * 
    **/
    create: XOR<TicketsCreateInput, TicketsUncheckedCreateInput>
    /**
     * In case the Tickets was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TicketsUpdateInput, TicketsUncheckedUpdateInput>
  }


  /**
   * Tickets delete
   */
  export type TicketsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Tickets
     * 
    **/
    select?: TicketsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TicketsInclude | null
    /**
     * Filter which Tickets to delete.
     * 
    **/
    where: TicketsWhereUniqueInput
  }


  /**
   * Tickets deleteMany
   */
  export type TicketsDeleteManyArgs = {
    where?: TicketsWhereInput
  }


  /**
   * Tickets without action
   */
  export type TicketsArgs = {
    /**
     * Select specific fields to fetch from the Tickets
     * 
    **/
    select?: TicketsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TicketsInclude | null
  }



  /**
   * Model UsersTickets
   */


  export type AggregateUsersTickets = {
    _count: UsersTicketsCountAggregateOutputType | null
    _avg: UsersTicketsAvgAggregateOutputType | null
    _sum: UsersTicketsSumAggregateOutputType | null
    _min: UsersTicketsMinAggregateOutputType | null
    _max: UsersTicketsMaxAggregateOutputType | null
  }

  export type UsersTicketsAvgAggregateOutputType = {
    quantity: number | null
  }

  export type UsersTicketsSumAggregateOutputType = {
    quantity: number | null
  }

  export type UsersTicketsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ticketId: string | null
    quantity: number | null
  }

  export type UsersTicketsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ticketId: string | null
    quantity: number | null
  }

  export type UsersTicketsCountAggregateOutputType = {
    id: number
    userId: number
    ticketId: number
    quantity: number
    _all: number
  }


  export type UsersTicketsAvgAggregateInputType = {
    quantity?: true
  }

  export type UsersTicketsSumAggregateInputType = {
    quantity?: true
  }

  export type UsersTicketsMinAggregateInputType = {
    id?: true
    userId?: true
    ticketId?: true
    quantity?: true
  }

  export type UsersTicketsMaxAggregateInputType = {
    id?: true
    userId?: true
    ticketId?: true
    quantity?: true
  }

  export type UsersTicketsCountAggregateInputType = {
    id?: true
    userId?: true
    ticketId?: true
    quantity?: true
    _all?: true
  }

  export type UsersTicketsAggregateArgs = {
    /**
     * Filter which UsersTickets to aggregate.
     * 
    **/
    where?: UsersTicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersTickets to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersTicketsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UsersTicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersTickets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersTickets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsersTickets
    **/
    _count?: true | UsersTicketsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersTicketsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersTicketsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersTicketsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersTicketsMaxAggregateInputType
  }

  export type GetUsersTicketsAggregateType<T extends UsersTicketsAggregateArgs> = {
        [P in keyof T & keyof AggregateUsersTickets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsersTickets[P]>
      : GetScalarType<T[P], AggregateUsersTickets[P]>
  }


    
    
  export type UsersTicketsGroupByArgs = {
    where?: UsersTicketsWhereInput
    orderBy?: Enumerable<UsersTicketsOrderByWithAggregationInput>
    by: Array<UsersTicketsScalarFieldEnum>
    having?: UsersTicketsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersTicketsCountAggregateInputType | true
    _avg?: UsersTicketsAvgAggregateInputType
    _sum?: UsersTicketsSumAggregateInputType
    _min?: UsersTicketsMinAggregateInputType
    _max?: UsersTicketsMaxAggregateInputType
  }


  export type UsersTicketsGroupByOutputType = {
    id: string
    userId: string
    ticketId: string
    quantity: number
    _count: UsersTicketsCountAggregateOutputType | null
    _avg: UsersTicketsAvgAggregateOutputType | null
    _sum: UsersTicketsSumAggregateOutputType | null
    _min: UsersTicketsMinAggregateOutputType | null
    _max: UsersTicketsMaxAggregateOutputType | null
  }

  type GetUsersTicketsGroupByPayload<T extends UsersTicketsGroupByArgs> = Promise<
    Array<
      PickArray<UsersTicketsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof UsersTicketsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], UsersTicketsGroupByOutputType[P]> 
            : GetScalarType<T[P], UsersTicketsGroupByOutputType[P]>
        }
      > 
    >


  export type UsersTicketsSelect = {
    ticket?: boolean | TicketsArgs
    user?: boolean | UsersArgs
    id?: boolean
    userId?: boolean
    ticketId?: boolean
    quantity?: boolean
  }

  export type UsersTicketsInclude = {
    ticket?: boolean | TicketsArgs
    user?: boolean | UsersArgs
  }

  export type UsersTicketsGetPayload<
    S extends boolean | null | undefined | UsersTicketsArgs,
    U = keyof S
      > = S extends true
        ? UsersTickets
    : S extends undefined
    ? never
    : S extends UsersTicketsArgs | UsersTicketsFindManyArgs
    ?'include' extends U
    ? UsersTickets  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'ticket'
        ? TicketsGetPayload<S['include'][P]> :
        P extends 'user'
        ? UsersGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof UsersTickets ?UsersTickets [P]
  : 
          P extends 'ticket'
        ? TicketsGetPayload<S['select'][P]> :
        P extends 'user'
        ? UsersGetPayload<S['select'][P]> : never
  } 
    : UsersTickets
  : UsersTickets


  type UsersTicketsCountArgs = Merge<
    Omit<UsersTicketsFindManyArgs, 'select' | 'include'> & {
      select?: UsersTicketsCountAggregateInputType | true
    }
  >

  export interface UsersTicketsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one UsersTickets that matches the filter.
     * @param {UsersTicketsFindUniqueArgs} args - Arguments to find a UsersTickets
     * @example
     * // Get one UsersTickets
     * const usersTickets = await prisma.usersTickets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersTicketsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UsersTicketsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UsersTickets'> extends True ? CheckSelect<T, Prisma__UsersTicketsClient<UsersTickets>, Prisma__UsersTicketsClient<UsersTicketsGetPayload<T>>> : CheckSelect<T, Prisma__UsersTicketsClient<UsersTickets | null >, Prisma__UsersTicketsClient<UsersTicketsGetPayload<T> | null >>

    /**
     * Find the first UsersTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersTicketsFindFirstArgs} args - Arguments to find a UsersTickets
     * @example
     * // Get one UsersTickets
     * const usersTickets = await prisma.usersTickets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersTicketsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UsersTicketsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UsersTickets'> extends True ? CheckSelect<T, Prisma__UsersTicketsClient<UsersTickets>, Prisma__UsersTicketsClient<UsersTicketsGetPayload<T>>> : CheckSelect<T, Prisma__UsersTicketsClient<UsersTickets | null >, Prisma__UsersTicketsClient<UsersTicketsGetPayload<T> | null >>

    /**
     * Find zero or more UsersTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersTicketsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsersTickets
     * const usersTickets = await prisma.usersTickets.findMany()
     * 
     * // Get first 10 UsersTickets
     * const usersTickets = await prisma.usersTickets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersTicketsWithIdOnly = await prisma.usersTickets.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsersTicketsFindManyArgs>(
      args?: SelectSubset<T, UsersTicketsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<UsersTickets>>, PrismaPromise<Array<UsersTicketsGetPayload<T>>>>

    /**
     * Create a UsersTickets.
     * @param {UsersTicketsCreateArgs} args - Arguments to create a UsersTickets.
     * @example
     * // Create one UsersTickets
     * const UsersTickets = await prisma.usersTickets.create({
     *   data: {
     *     // ... data to create a UsersTickets
     *   }
     * })
     * 
    **/
    create<T extends UsersTicketsCreateArgs>(
      args: SelectSubset<T, UsersTicketsCreateArgs>
    ): CheckSelect<T, Prisma__UsersTicketsClient<UsersTickets>, Prisma__UsersTicketsClient<UsersTicketsGetPayload<T>>>

    /**
     * Create many UsersTickets.
     *     @param {UsersTicketsCreateManyArgs} args - Arguments to create many UsersTickets.
     *     @example
     *     // Create many UsersTickets
     *     const usersTickets = await prisma.usersTickets.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersTicketsCreateManyArgs>(
      args?: SelectSubset<T, UsersTicketsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UsersTickets.
     * @param {UsersTicketsDeleteArgs} args - Arguments to delete one UsersTickets.
     * @example
     * // Delete one UsersTickets
     * const UsersTickets = await prisma.usersTickets.delete({
     *   where: {
     *     // ... filter to delete one UsersTickets
     *   }
     * })
     * 
    **/
    delete<T extends UsersTicketsDeleteArgs>(
      args: SelectSubset<T, UsersTicketsDeleteArgs>
    ): CheckSelect<T, Prisma__UsersTicketsClient<UsersTickets>, Prisma__UsersTicketsClient<UsersTicketsGetPayload<T>>>

    /**
     * Update one UsersTickets.
     * @param {UsersTicketsUpdateArgs} args - Arguments to update one UsersTickets.
     * @example
     * // Update one UsersTickets
     * const usersTickets = await prisma.usersTickets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersTicketsUpdateArgs>(
      args: SelectSubset<T, UsersTicketsUpdateArgs>
    ): CheckSelect<T, Prisma__UsersTicketsClient<UsersTickets>, Prisma__UsersTicketsClient<UsersTicketsGetPayload<T>>>

    /**
     * Delete zero or more UsersTickets.
     * @param {UsersTicketsDeleteManyArgs} args - Arguments to filter UsersTickets to delete.
     * @example
     * // Delete a few UsersTickets
     * const { count } = await prisma.usersTickets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersTicketsDeleteManyArgs>(
      args?: SelectSubset<T, UsersTicketsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsersTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersTicketsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsersTickets
     * const usersTickets = await prisma.usersTickets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersTicketsUpdateManyArgs>(
      args: SelectSubset<T, UsersTicketsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UsersTickets.
     * @param {UsersTicketsUpsertArgs} args - Arguments to update or create a UsersTickets.
     * @example
     * // Update or create a UsersTickets
     * const usersTickets = await prisma.usersTickets.upsert({
     *   create: {
     *     // ... data to create a UsersTickets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsersTickets we want to update
     *   }
     * })
    **/
    upsert<T extends UsersTicketsUpsertArgs>(
      args: SelectSubset<T, UsersTicketsUpsertArgs>
    ): CheckSelect<T, Prisma__UsersTicketsClient<UsersTickets>, Prisma__UsersTicketsClient<UsersTicketsGetPayload<T>>>

    /**
     * Count the number of UsersTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersTicketsCountArgs} args - Arguments to filter UsersTickets to count.
     * @example
     * // Count the number of UsersTickets
     * const count = await prisma.usersTickets.count({
     *   where: {
     *     // ... the filter for the UsersTickets we want to count
     *   }
     * })
    **/
    count<T extends UsersTicketsCountArgs>(
      args?: Subset<T, UsersTicketsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersTicketsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsersTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersTicketsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersTicketsAggregateArgs>(args: Subset<T, UsersTicketsAggregateArgs>): PrismaPromise<GetUsersTicketsAggregateType<T>>

    /**
     * Group by UsersTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersTicketsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersTicketsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersTicketsGroupByArgs['orderBy'] }
        : { orderBy?: UsersTicketsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersTicketsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersTicketsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsersTickets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UsersTicketsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    ticket<T extends TicketsArgs = {}>(args?: Subset<T, TicketsArgs>): CheckSelect<T, Prisma__TicketsClient<Tickets | null >, Prisma__TicketsClient<TicketsGetPayload<T> | null >>;

    user<T extends UsersArgs = {}>(args?: Subset<T, UsersArgs>): CheckSelect<T, Prisma__UsersClient<Users | null >, Prisma__UsersClient<UsersGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * UsersTickets findUnique
   */
  export type UsersTicketsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the UsersTickets
     * 
    **/
    select?: UsersTicketsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersTicketsInclude | null
    /**
     * Throw an Error if a UsersTickets can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which UsersTickets to fetch.
     * 
    **/
    where: UsersTicketsWhereUniqueInput
  }


  /**
   * UsersTickets findFirst
   */
  export type UsersTicketsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the UsersTickets
     * 
    **/
    select?: UsersTicketsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersTicketsInclude | null
    /**
     * Throw an Error if a UsersTickets can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which UsersTickets to fetch.
     * 
    **/
    where?: UsersTicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersTickets to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersTicketsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersTickets.
     * 
    **/
    cursor?: UsersTicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersTickets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersTickets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersTickets.
     * 
    **/
    distinct?: Enumerable<UsersTicketsScalarFieldEnum>
  }


  /**
   * UsersTickets findMany
   */
  export type UsersTicketsFindManyArgs = {
    /**
     * Select specific fields to fetch from the UsersTickets
     * 
    **/
    select?: UsersTicketsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersTicketsInclude | null
    /**
     * Filter, which UsersTickets to fetch.
     * 
    **/
    where?: UsersTicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersTickets to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersTicketsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsersTickets.
     * 
    **/
    cursor?: UsersTicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersTickets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersTickets.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UsersTicketsScalarFieldEnum>
  }


  /**
   * UsersTickets create
   */
  export type UsersTicketsCreateArgs = {
    /**
     * Select specific fields to fetch from the UsersTickets
     * 
    **/
    select?: UsersTicketsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersTicketsInclude | null
    /**
     * The data needed to create a UsersTickets.
     * 
    **/
    data: XOR<UsersTicketsCreateInput, UsersTicketsUncheckedCreateInput>
  }


  /**
   * UsersTickets createMany
   */
  export type UsersTicketsCreateManyArgs = {
    data: Enumerable<UsersTicketsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UsersTickets update
   */
  export type UsersTicketsUpdateArgs = {
    /**
     * Select specific fields to fetch from the UsersTickets
     * 
    **/
    select?: UsersTicketsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersTicketsInclude | null
    /**
     * The data needed to update a UsersTickets.
     * 
    **/
    data: XOR<UsersTicketsUpdateInput, UsersTicketsUncheckedUpdateInput>
    /**
     * Choose, which UsersTickets to update.
     * 
    **/
    where: UsersTicketsWhereUniqueInput
  }


  /**
   * UsersTickets updateMany
   */
  export type UsersTicketsUpdateManyArgs = {
    data: XOR<UsersTicketsUpdateManyMutationInput, UsersTicketsUncheckedUpdateManyInput>
    where?: UsersTicketsWhereInput
  }


  /**
   * UsersTickets upsert
   */
  export type UsersTicketsUpsertArgs = {
    /**
     * Select specific fields to fetch from the UsersTickets
     * 
    **/
    select?: UsersTicketsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersTicketsInclude | null
    /**
     * The filter to search for the UsersTickets to update in case it exists.
     * 
    **/
    where: UsersTicketsWhereUniqueInput
    /**
     * In case the UsersTickets found by the `where` argument doesn't exist, create a new UsersTickets with this data.
     * 
    **/
    create: XOR<UsersTicketsCreateInput, UsersTicketsUncheckedCreateInput>
    /**
     * In case the UsersTickets was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UsersTicketsUpdateInput, UsersTicketsUncheckedUpdateInput>
  }


  /**
   * UsersTickets delete
   */
  export type UsersTicketsDeleteArgs = {
    /**
     * Select specific fields to fetch from the UsersTickets
     * 
    **/
    select?: UsersTicketsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersTicketsInclude | null
    /**
     * Filter which UsersTickets to delete.
     * 
    **/
    where: UsersTicketsWhereUniqueInput
  }


  /**
   * UsersTickets deleteMany
   */
  export type UsersTicketsDeleteManyArgs = {
    where?: UsersTicketsWhereInput
  }


  /**
   * UsersTickets without action
   */
  export type UsersTicketsArgs = {
    /**
     * Select specific fields to fetch from the UsersTickets
     * 
    **/
    select?: UsersTicketsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersTicketsInclude | null
  }



  /**
   * Model Events
   */


  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  export type EventsMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    companyId: string | null
    ticketId: string | null
    eventDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    companyId: string | null
    ticketId: string | null
    eventDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    companyId: number
    ticketId: number
    eventDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    companyId?: true
    ticketId?: true
    eventDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    companyId?: true
    ticketId?: true
    eventDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    companyId?: true
    ticketId?: true
    eventDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventsAggregateArgs = {
    /**
     * Filter which Events to aggregate.
     * 
    **/
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     * 
    **/
    orderBy?: Enumerable<EventsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsMaxAggregateInputType
  }

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>
  }


    
    
  export type EventsGroupByArgs = {
    where?: EventsWhereInput
    orderBy?: Enumerable<EventsOrderByWithAggregationInput>
    by: Array<EventsScalarFieldEnum>
    having?: EventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsCountAggregateInputType | true
    _min?: EventsMinAggregateInputType
    _max?: EventsMaxAggregateInputType
  }


  export type EventsGroupByOutputType = {
    id: string
    name: string
    description: string
    companyId: string
    ticketId: string
    eventDate: Date
    createdAt: Date
    updatedAt: Date
    _count: EventsCountAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  type GetEventsGroupByPayload<T extends EventsGroupByArgs> = Promise<
    Array<
      PickArray<EventsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], EventsGroupByOutputType[P]> 
            : GetScalarType<T[P], EventsGroupByOutputType[P]>
        }
      > 
    >


  export type EventsSelect = {
    ticket?: boolean | TicketsArgs
    company?: boolean | CompaniesArgs
    id?: boolean
    name?: boolean
    description?: boolean
    companyId?: boolean
    ticketId?: boolean
    eventDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventsInclude = {
    ticket?: boolean | TicketsArgs
    company?: boolean | CompaniesArgs
  }

  export type EventsGetPayload<
    S extends boolean | null | undefined | EventsArgs,
    U = keyof S
      > = S extends true
        ? Events
    : S extends undefined
    ? never
    : S extends EventsArgs | EventsFindManyArgs
    ?'include' extends U
    ? Events  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'ticket'
        ? TicketsGetPayload<S['include'][P]> :
        P extends 'company'
        ? CompaniesGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Events ?Events [P]
  : 
          P extends 'ticket'
        ? TicketsGetPayload<S['select'][P]> :
        P extends 'company'
        ? CompaniesGetPayload<S['select'][P]> : never
  } 
    : Events
  : Events


  type EventsCountArgs = Merge<
    Omit<EventsFindManyArgs, 'select' | 'include'> & {
      select?: EventsCountAggregateInputType | true
    }
  >

  export interface EventsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Events that matches the filter.
     * @param {EventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EventsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EventsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Events'> extends True ? CheckSelect<T, Prisma__EventsClient<Events>, Prisma__EventsClient<EventsGetPayload<T>>> : CheckSelect<T, Prisma__EventsClient<Events | null >, Prisma__EventsClient<EventsGetPayload<T> | null >>

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EventsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EventsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Events'> extends True ? CheckSelect<T, Prisma__EventsClient<Events>, Prisma__EventsClient<EventsGetPayload<T>>> : CheckSelect<T, Prisma__EventsClient<Events | null >, Prisma__EventsClient<EventsGetPayload<T> | null >>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventsWithIdOnly = await prisma.events.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EventsFindManyArgs>(
      args?: SelectSubset<T, EventsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Events>>, PrismaPromise<Array<EventsGetPayload<T>>>>

    /**
     * Create a Events.
     * @param {EventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     * 
    **/
    create<T extends EventsCreateArgs>(
      args: SelectSubset<T, EventsCreateArgs>
    ): CheckSelect<T, Prisma__EventsClient<Events>, Prisma__EventsClient<EventsGetPayload<T>>>

    /**
     * Create many Events.
     *     @param {EventsCreateManyArgs} args - Arguments to create many Events.
     *     @example
     *     // Create many Events
     *     const events = await prisma.events.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EventsCreateManyArgs>(
      args?: SelectSubset<T, EventsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Events.
     * @param {EventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     * 
    **/
    delete<T extends EventsDeleteArgs>(
      args: SelectSubset<T, EventsDeleteArgs>
    ): CheckSelect<T, Prisma__EventsClient<Events>, Prisma__EventsClient<EventsGetPayload<T>>>

    /**
     * Update one Events.
     * @param {EventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EventsUpdateArgs>(
      args: SelectSubset<T, EventsUpdateArgs>
    ): CheckSelect<T, Prisma__EventsClient<Events>, Prisma__EventsClient<EventsGetPayload<T>>>

    /**
     * Delete zero or more Events.
     * @param {EventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EventsDeleteManyArgs>(
      args?: SelectSubset<T, EventsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EventsUpdateManyArgs>(
      args: SelectSubset<T, EventsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Events.
     * @param {EventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
    **/
    upsert<T extends EventsUpsertArgs>(
      args: SelectSubset<T, EventsUpsertArgs>
    ): CheckSelect<T, Prisma__EventsClient<Events>, Prisma__EventsClient<EventsGetPayload<T>>>

    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventsCountArgs>(
      args?: Subset<T, EventsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventsAggregateArgs>(args: Subset<T, EventsAggregateArgs>): PrismaPromise<GetEventsAggregateType<T>>

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventsGroupByArgs['orderBy'] }
        : { orderBy?: EventsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EventsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    ticket<T extends TicketsArgs = {}>(args?: Subset<T, TicketsArgs>): CheckSelect<T, Prisma__TicketsClient<Tickets | null >, Prisma__TicketsClient<TicketsGetPayload<T> | null >>;

    company<T extends CompaniesArgs = {}>(args?: Subset<T, CompaniesArgs>): CheckSelect<T, Prisma__CompaniesClient<Companies | null >, Prisma__CompaniesClient<CompaniesGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Events findUnique
   */
  export type EventsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Events
     * 
    **/
    select?: EventsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventsInclude | null
    /**
     * Throw an Error if a Events can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Events to fetch.
     * 
    **/
    where: EventsWhereUniqueInput
  }


  /**
   * Events findFirst
   */
  export type EventsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Events
     * 
    **/
    select?: EventsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventsInclude | null
    /**
     * Throw an Error if a Events can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Events to fetch.
     * 
    **/
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     * 
    **/
    orderBy?: Enumerable<EventsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     * 
    **/
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     * 
    **/
    distinct?: Enumerable<EventsScalarFieldEnum>
  }


  /**
   * Events findMany
   */
  export type EventsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Events
     * 
    **/
    select?: EventsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventsInclude | null
    /**
     * Filter, which Events to fetch.
     * 
    **/
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     * 
    **/
    orderBy?: Enumerable<EventsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     * 
    **/
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EventsScalarFieldEnum>
  }


  /**
   * Events create
   */
  export type EventsCreateArgs = {
    /**
     * Select specific fields to fetch from the Events
     * 
    **/
    select?: EventsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventsInclude | null
    /**
     * The data needed to create a Events.
     * 
    **/
    data: XOR<EventsCreateInput, EventsUncheckedCreateInput>
  }


  /**
   * Events createMany
   */
  export type EventsCreateManyArgs = {
    data: Enumerable<EventsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Events update
   */
  export type EventsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Events
     * 
    **/
    select?: EventsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventsInclude | null
    /**
     * The data needed to update a Events.
     * 
    **/
    data: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>
    /**
     * Choose, which Events to update.
     * 
    **/
    where: EventsWhereUniqueInput
  }


  /**
   * Events updateMany
   */
  export type EventsUpdateManyArgs = {
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyInput>
    where?: EventsWhereInput
  }


  /**
   * Events upsert
   */
  export type EventsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Events
     * 
    **/
    select?: EventsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventsInclude | null
    /**
     * The filter to search for the Events to update in case it exists.
     * 
    **/
    where: EventsWhereUniqueInput
    /**
     * In case the Events found by the `where` argument doesn't exist, create a new Events with this data.
     * 
    **/
    create: XOR<EventsCreateInput, EventsUncheckedCreateInput>
    /**
     * In case the Events was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>
  }


  /**
   * Events delete
   */
  export type EventsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Events
     * 
    **/
    select?: EventsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventsInclude | null
    /**
     * Filter which Events to delete.
     * 
    **/
    where: EventsWhereUniqueInput
  }


  /**
   * Events deleteMany
   */
  export type EventsDeleteManyArgs = {
    where?: EventsWhereInput
  }


  /**
   * Events without action
   */
  export type EventsArgs = {
    /**
     * Select specific fields to fetch from the Events
     * 
    **/
    select?: EventsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventsInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    phoneNumber: 'phoneNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const CompaniesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompaniesScalarFieldEnum = (typeof CompaniesScalarFieldEnum)[keyof typeof CompaniesScalarFieldEnum]


  export const RefreshTokensScalarFieldEnum: {
    id: 'id',
    expiresIn: 'expiresIn',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RefreshTokensScalarFieldEnum = (typeof RefreshTokensScalarFieldEnum)[keyof typeof RefreshTokensScalarFieldEnum]


  export const TicketsScalarFieldEnum: {
    id: 'id',
    price: 'price',
    companyId: 'companyId',
    purchaseLimit: 'purchaseLimit',
    deadline: 'deadline'
  };

  export type TicketsScalarFieldEnum = (typeof TicketsScalarFieldEnum)[keyof typeof TicketsScalarFieldEnum]


  export const UsersTicketsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ticketId: 'ticketId',
    quantity: 'quantity'
  };

  export type UsersTicketsScalarFieldEnum = (typeof UsersTicketsScalarFieldEnum)[keyof typeof UsersTicketsScalarFieldEnum]


  export const EventsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    companyId: 'companyId',
    ticketId: 'ticketId',
    eventDate: 'eventDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: Enumerable<UsersWhereInput>
    OR?: Enumerable<UsersWhereInput>
    NOT?: Enumerable<UsersWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    lastName?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    phoneNumber?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    RefreshToken?: XOR<RefreshTokensRelationFilter, RefreshTokensWhereInput> | null
    UsersTickets?: XOR<UsersTicketsRelationFilter, UsersTicketsWhereInput> | null
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    RefreshToken?: RefreshTokensOrderByWithRelationInput
    UsersTickets?: UsersTicketsOrderByWithRelationInput
  }

  export type UsersWhereUniqueInput = {
    id?: string
    email?: string
    password?: string
  }

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UsersScalarWhereWithAggregatesInput>
    OR?: Enumerable<UsersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UsersScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    phoneNumber?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CompaniesWhereInput = {
    AND?: Enumerable<CompaniesWhereInput>
    OR?: Enumerable<CompaniesWhereInput>
    NOT?: Enumerable<CompaniesWhereInput>
    Tickets?: XOR<TicketsRelationFilter, TicketsWhereInput> | null
    Events?: XOR<EventsRelationFilter, EventsWhereInput> | null
    id?: StringFilter | string
    name?: StringFilter | string
    email?: StringFilter | string
    phoneNumber?: StringFilter | string
    address?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type CompaniesOrderByWithRelationInput = {
    Tickets?: TicketsOrderByWithRelationInput
    Events?: EventsOrderByWithRelationInput
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompaniesWhereUniqueInput = {
    id?: string
  }

  export type CompaniesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompaniesCountOrderByAggregateInput
    _max?: CompaniesMaxOrderByAggregateInput
    _min?: CompaniesMinOrderByAggregateInput
  }

  export type CompaniesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CompaniesScalarWhereWithAggregatesInput>
    OR?: Enumerable<CompaniesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CompaniesScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    phoneNumber?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type RefreshTokensWhereInput = {
    AND?: Enumerable<RefreshTokensWhereInput>
    OR?: Enumerable<RefreshTokensWhereInput>
    NOT?: Enumerable<RefreshTokensWhereInput>
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    id?: StringFilter | string
    expiresIn?: IntFilter | number
    userId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type RefreshTokensOrderByWithRelationInput = {
    user?: UsersOrderByWithRelationInput
    id?: SortOrder
    expiresIn?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefreshTokensWhereUniqueInput = {
    id?: string
  }

  export type RefreshTokensOrderByWithAggregationInput = {
    id?: SortOrder
    expiresIn?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RefreshTokensCountOrderByAggregateInput
    _avg?: RefreshTokensAvgOrderByAggregateInput
    _max?: RefreshTokensMaxOrderByAggregateInput
    _min?: RefreshTokensMinOrderByAggregateInput
    _sum?: RefreshTokensSumOrderByAggregateInput
  }

  export type RefreshTokensScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RefreshTokensScalarWhereWithAggregatesInput>
    OR?: Enumerable<RefreshTokensScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RefreshTokensScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    expiresIn?: IntWithAggregatesFilter | number
    userId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TicketsWhereInput = {
    AND?: Enumerable<TicketsWhereInput>
    OR?: Enumerable<TicketsWhereInput>
    NOT?: Enumerable<TicketsWhereInput>
    company?: XOR<CompaniesRelationFilter, CompaniesWhereInput>
    id?: StringFilter | string
    price?: DecimalFilter | Decimal | number | string
    companyId?: StringFilter | string
    purchaseLimit?: IntFilter | number
    deadline?: DateTimeFilter | Date | string
    UsersTickets?: XOR<UsersTicketsRelationFilter, UsersTicketsWhereInput> | null
    Events?: XOR<EventsRelationFilter, EventsWhereInput> | null
  }

  export type TicketsOrderByWithRelationInput = {
    company?: CompaniesOrderByWithRelationInput
    id?: SortOrder
    price?: SortOrder
    companyId?: SortOrder
    purchaseLimit?: SortOrder
    deadline?: SortOrder
    UsersTickets?: UsersTicketsOrderByWithRelationInput
    Events?: EventsOrderByWithRelationInput
  }

  export type TicketsWhereUniqueInput = {
    id?: string
  }

  export type TicketsOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    companyId?: SortOrder
    purchaseLimit?: SortOrder
    deadline?: SortOrder
    _count?: TicketsCountOrderByAggregateInput
    _avg?: TicketsAvgOrderByAggregateInput
    _max?: TicketsMaxOrderByAggregateInput
    _min?: TicketsMinOrderByAggregateInput
    _sum?: TicketsSumOrderByAggregateInput
  }

  export type TicketsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TicketsScalarWhereWithAggregatesInput>
    OR?: Enumerable<TicketsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TicketsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    price?: DecimalWithAggregatesFilter | Decimal | number | string
    companyId?: StringWithAggregatesFilter | string
    purchaseLimit?: IntWithAggregatesFilter | number
    deadline?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UsersTicketsWhereInput = {
    AND?: Enumerable<UsersTicketsWhereInput>
    OR?: Enumerable<UsersTicketsWhereInput>
    NOT?: Enumerable<UsersTicketsWhereInput>
    ticket?: XOR<TicketsRelationFilter, TicketsWhereInput>
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    ticketId?: StringFilter | string
    quantity?: IntFilter | number
  }

  export type UsersTicketsOrderByWithRelationInput = {
    ticket?: TicketsOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
    id?: SortOrder
    userId?: SortOrder
    ticketId?: SortOrder
    quantity?: SortOrder
  }

  export type UsersTicketsWhereUniqueInput = {
    id?: string
  }

  export type UsersTicketsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ticketId?: SortOrder
    quantity?: SortOrder
    _count?: UsersTicketsCountOrderByAggregateInput
    _avg?: UsersTicketsAvgOrderByAggregateInput
    _max?: UsersTicketsMaxOrderByAggregateInput
    _min?: UsersTicketsMinOrderByAggregateInput
    _sum?: UsersTicketsSumOrderByAggregateInput
  }

  export type UsersTicketsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UsersTicketsScalarWhereWithAggregatesInput>
    OR?: Enumerable<UsersTicketsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UsersTicketsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    ticketId?: StringWithAggregatesFilter | string
    quantity?: IntWithAggregatesFilter | number
  }

  export type EventsWhereInput = {
    AND?: Enumerable<EventsWhereInput>
    OR?: Enumerable<EventsWhereInput>
    NOT?: Enumerable<EventsWhereInput>
    ticket?: XOR<TicketsRelationFilter, TicketsWhereInput>
    company?: XOR<CompaniesRelationFilter, CompaniesWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    description?: StringFilter | string
    companyId?: StringFilter | string
    ticketId?: StringFilter | string
    eventDate?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type EventsOrderByWithRelationInput = {
    ticket?: TicketsOrderByWithRelationInput
    company?: CompaniesOrderByWithRelationInput
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    companyId?: SortOrder
    ticketId?: SortOrder
    eventDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventsWhereUniqueInput = {
    id?: string
  }

  export type EventsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    companyId?: SortOrder
    ticketId?: SortOrder
    eventDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventsCountOrderByAggregateInput
    _max?: EventsMaxOrderByAggregateInput
    _min?: EventsMinOrderByAggregateInput
  }

  export type EventsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EventsScalarWhereWithAggregatesInput>
    OR?: Enumerable<EventsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EventsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    companyId?: StringWithAggregatesFilter | string
    ticketId?: StringWithAggregatesFilter | string
    eventDate?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UsersCreateInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    RefreshToken?: RefreshTokensCreateNestedOneWithoutUserInput
    UsersTickets?: UsersTicketsCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    RefreshToken?: RefreshTokensUncheckedCreateNestedOneWithoutUserInput
    UsersTickets?: UsersTicketsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RefreshToken?: RefreshTokensUpdateOneWithoutUserInput
    UsersTickets?: UsersTicketsUpdateOneWithoutUserInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RefreshToken?: RefreshTokensUncheckedUpdateOneWithoutUserInput
    UsersTickets?: UsersTicketsUncheckedUpdateOneWithoutUserInput
  }

  export type UsersCreateManyInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompaniesCreateInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Tickets?: TicketsCreateNestedOneWithoutCompanyInput
    Events?: EventsCreateNestedOneWithoutCompanyInput
  }

  export type CompaniesUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Tickets?: TicketsUncheckedCreateNestedOneWithoutCompanyInput
    Events?: EventsUncheckedCreateNestedOneWithoutCompanyInput
  }

  export type CompaniesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tickets?: TicketsUpdateOneWithoutCompanyInput
    Events?: EventsUpdateOneWithoutCompanyInput
  }

  export type CompaniesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tickets?: TicketsUncheckedUpdateOneWithoutCompanyInput
    Events?: EventsUncheckedUpdateOneWithoutCompanyInput
  }

  export type CompaniesCreateManyInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompaniesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompaniesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokensCreateInput = {
    id?: string
    expiresIn?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutRefreshTokenInput
  }

  export type RefreshTokensUncheckedCreateInput = {
    id?: string
    expiresIn?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokensUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresIn?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutRefreshTokenInput
  }

  export type RefreshTokensUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresIn?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokensCreateManyInput = {
    id?: string
    expiresIn?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokensUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresIn?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokensUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresIn?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketsCreateInput = {
    id?: string
    price: Decimal | number | string
    purchaseLimit: number
    deadline?: Date | string
    company: CompaniesCreateNestedOneWithoutTicketsInput
    UsersTickets?: UsersTicketsCreateNestedOneWithoutTicketInput
    Events?: EventsCreateNestedOneWithoutTicketInput
  }

  export type TicketsUncheckedCreateInput = {
    id?: string
    price: Decimal | number | string
    companyId: string
    purchaseLimit: number
    deadline?: Date | string
    UsersTickets?: UsersTicketsUncheckedCreateNestedOneWithoutTicketInput
    Events?: EventsUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    purchaseLimit?: IntFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompaniesUpdateOneRequiredWithoutTicketsInput
    UsersTickets?: UsersTicketsUpdateOneWithoutTicketInput
    Events?: EventsUpdateOneWithoutTicketInput
  }

  export type TicketsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    companyId?: StringFieldUpdateOperationsInput | string
    purchaseLimit?: IntFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    UsersTickets?: UsersTicketsUncheckedUpdateOneWithoutTicketInput
    Events?: EventsUncheckedUpdateOneWithoutTicketInput
  }

  export type TicketsCreateManyInput = {
    id?: string
    price: Decimal | number | string
    companyId: string
    purchaseLimit: number
    deadline?: Date | string
  }

  export type TicketsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    purchaseLimit?: IntFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    companyId?: StringFieldUpdateOperationsInput | string
    purchaseLimit?: IntFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersTicketsCreateInput = {
    id?: string
    quantity: number
    ticket: TicketsCreateNestedOneWithoutUsersTicketsInput
    user: UsersCreateNestedOneWithoutUsersTicketsInput
  }

  export type UsersTicketsUncheckedCreateInput = {
    id?: string
    userId: string
    ticketId: string
    quantity: number
  }

  export type UsersTicketsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    ticket?: TicketsUpdateOneRequiredWithoutUsersTicketsInput
    user?: UsersUpdateOneRequiredWithoutUsersTicketsInput
  }

  export type UsersTicketsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type UsersTicketsCreateManyInput = {
    id?: string
    userId: string
    ticketId: string
    quantity: number
  }

  export type UsersTicketsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type UsersTicketsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type EventsCreateInput = {
    id?: string
    name: string
    description: string
    eventDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket: TicketsCreateNestedOneWithoutEventsInput
    company: CompaniesCreateNestedOneWithoutEventsInput
  }

  export type EventsUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    companyId: string
    ticketId: string
    eventDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketsUpdateOneRequiredWithoutEventsInput
    company?: CompaniesUpdateOneRequiredWithoutEventsInput
  }

  export type EventsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventsCreateManyInput = {
    id?: string
    name: string
    description: string
    companyId: string
    ticketId: string
    eventDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type RefreshTokensRelationFilter = {
    is?: RefreshTokensWhereInput | null
    isNot?: RefreshTokensWhereInput | null
  }

  export type UsersTicketsRelationFilter = {
    is?: UsersTicketsWhereInput | null
    isNot?: UsersTicketsWhereInput | null
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type TicketsRelationFilter = {
    is?: TicketsWhereInput | null
    isNot?: TicketsWhereInput | null
  }

  export type EventsRelationFilter = {
    is?: EventsWhereInput | null
    isNot?: EventsWhereInput | null
  }

  export type CompaniesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompaniesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompaniesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type RefreshTokensCountOrderByAggregateInput = {
    id?: SortOrder
    expiresIn?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefreshTokensAvgOrderByAggregateInput = {
    expiresIn?: SortOrder
  }

  export type RefreshTokensMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresIn?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefreshTokensMinOrderByAggregateInput = {
    id?: SortOrder
    expiresIn?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefreshTokensSumOrderByAggregateInput = {
    expiresIn?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type CompaniesRelationFilter = {
    is?: CompaniesWhereInput
    isNot?: CompaniesWhereInput
  }

  export type DecimalFilter = {
    equals?: Decimal | number | string
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalFilter | Decimal | number | string
  }

  export type TicketsCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    companyId?: SortOrder
    purchaseLimit?: SortOrder
    deadline?: SortOrder
  }

  export type TicketsAvgOrderByAggregateInput = {
    price?: SortOrder
    purchaseLimit?: SortOrder
  }

  export type TicketsMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    companyId?: SortOrder
    purchaseLimit?: SortOrder
    deadline?: SortOrder
  }

  export type TicketsMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    companyId?: SortOrder
    purchaseLimit?: SortOrder
    deadline?: SortOrder
  }

  export type TicketsSumOrderByAggregateInput = {
    price?: SortOrder
    purchaseLimit?: SortOrder
  }

  export type DecimalWithAggregatesFilter = {
    equals?: Decimal | number | string
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type UsersTicketsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ticketId?: SortOrder
    quantity?: SortOrder
  }

  export type UsersTicketsAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type UsersTicketsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ticketId?: SortOrder
    quantity?: SortOrder
  }

  export type UsersTicketsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ticketId?: SortOrder
    quantity?: SortOrder
  }

  export type UsersTicketsSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type EventsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    companyId?: SortOrder
    ticketId?: SortOrder
    eventDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    companyId?: SortOrder
    ticketId?: SortOrder
    eventDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    companyId?: SortOrder
    ticketId?: SortOrder
    eventDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefreshTokensCreateNestedOneWithoutUserInput = {
    create?: XOR<RefreshTokensCreateWithoutUserInput, RefreshTokensUncheckedCreateWithoutUserInput>
    connectOrCreate?: RefreshTokensCreateOrConnectWithoutUserInput
    connect?: RefreshTokensWhereUniqueInput
  }

  export type UsersTicketsCreateNestedOneWithoutUserInput = {
    create?: XOR<UsersTicketsCreateWithoutUserInput, UsersTicketsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UsersTicketsCreateOrConnectWithoutUserInput
    connect?: UsersTicketsWhereUniqueInput
  }

  export type RefreshTokensUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<RefreshTokensCreateWithoutUserInput, RefreshTokensUncheckedCreateWithoutUserInput>
    connectOrCreate?: RefreshTokensCreateOrConnectWithoutUserInput
    connect?: RefreshTokensWhereUniqueInput
  }

  export type UsersTicketsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UsersTicketsCreateWithoutUserInput, UsersTicketsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UsersTicketsCreateOrConnectWithoutUserInput
    connect?: UsersTicketsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RefreshTokensUpdateOneWithoutUserInput = {
    create?: XOR<RefreshTokensCreateWithoutUserInput, RefreshTokensUncheckedCreateWithoutUserInput>
    connectOrCreate?: RefreshTokensCreateOrConnectWithoutUserInput
    upsert?: RefreshTokensUpsertWithoutUserInput
    connect?: RefreshTokensWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<RefreshTokensUpdateWithoutUserInput, RefreshTokensUncheckedUpdateWithoutUserInput>
  }

  export type UsersTicketsUpdateOneWithoutUserInput = {
    create?: XOR<UsersTicketsCreateWithoutUserInput, UsersTicketsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UsersTicketsCreateOrConnectWithoutUserInput
    upsert?: UsersTicketsUpsertWithoutUserInput
    connect?: UsersTicketsWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<UsersTicketsUpdateWithoutUserInput, UsersTicketsUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokensUncheckedUpdateOneWithoutUserInput = {
    create?: XOR<RefreshTokensCreateWithoutUserInput, RefreshTokensUncheckedCreateWithoutUserInput>
    connectOrCreate?: RefreshTokensCreateOrConnectWithoutUserInput
    upsert?: RefreshTokensUpsertWithoutUserInput
    connect?: RefreshTokensWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<RefreshTokensUpdateWithoutUserInput, RefreshTokensUncheckedUpdateWithoutUserInput>
  }

  export type UsersTicketsUncheckedUpdateOneWithoutUserInput = {
    create?: XOR<UsersTicketsCreateWithoutUserInput, UsersTicketsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UsersTicketsCreateOrConnectWithoutUserInput
    upsert?: UsersTicketsUpsertWithoutUserInput
    connect?: UsersTicketsWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<UsersTicketsUpdateWithoutUserInput, UsersTicketsUncheckedUpdateWithoutUserInput>
  }

  export type TicketsCreateNestedOneWithoutCompanyInput = {
    create?: XOR<TicketsCreateWithoutCompanyInput, TicketsUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: TicketsCreateOrConnectWithoutCompanyInput
    connect?: TicketsWhereUniqueInput
  }

  export type EventsCreateNestedOneWithoutCompanyInput = {
    create?: XOR<EventsCreateWithoutCompanyInput, EventsUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: EventsCreateOrConnectWithoutCompanyInput
    connect?: EventsWhereUniqueInput
  }

  export type TicketsUncheckedCreateNestedOneWithoutCompanyInput = {
    create?: XOR<TicketsCreateWithoutCompanyInput, TicketsUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: TicketsCreateOrConnectWithoutCompanyInput
    connect?: TicketsWhereUniqueInput
  }

  export type EventsUncheckedCreateNestedOneWithoutCompanyInput = {
    create?: XOR<EventsCreateWithoutCompanyInput, EventsUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: EventsCreateOrConnectWithoutCompanyInput
    connect?: EventsWhereUniqueInput
  }

  export type TicketsUpdateOneWithoutCompanyInput = {
    create?: XOR<TicketsCreateWithoutCompanyInput, TicketsUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: TicketsCreateOrConnectWithoutCompanyInput
    upsert?: TicketsUpsertWithoutCompanyInput
    connect?: TicketsWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<TicketsUpdateWithoutCompanyInput, TicketsUncheckedUpdateWithoutCompanyInput>
  }

  export type EventsUpdateOneWithoutCompanyInput = {
    create?: XOR<EventsCreateWithoutCompanyInput, EventsUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: EventsCreateOrConnectWithoutCompanyInput
    upsert?: EventsUpsertWithoutCompanyInput
    connect?: EventsWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<EventsUpdateWithoutCompanyInput, EventsUncheckedUpdateWithoutCompanyInput>
  }

  export type TicketsUncheckedUpdateOneWithoutCompanyInput = {
    create?: XOR<TicketsCreateWithoutCompanyInput, TicketsUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: TicketsCreateOrConnectWithoutCompanyInput
    upsert?: TicketsUpsertWithoutCompanyInput
    connect?: TicketsWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<TicketsUpdateWithoutCompanyInput, TicketsUncheckedUpdateWithoutCompanyInput>
  }

  export type EventsUncheckedUpdateOneWithoutCompanyInput = {
    create?: XOR<EventsCreateWithoutCompanyInput, EventsUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: EventsCreateOrConnectWithoutCompanyInput
    upsert?: EventsUpsertWithoutCompanyInput
    connect?: EventsWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<EventsUpdateWithoutCompanyInput, EventsUncheckedUpdateWithoutCompanyInput>
  }

  export type UsersCreateNestedOneWithoutRefreshTokenInput = {
    create?: XOR<UsersCreateWithoutRefreshTokenInput, UsersUncheckedCreateWithoutRefreshTokenInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRefreshTokenInput
    connect?: UsersWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersUpdateOneRequiredWithoutRefreshTokenInput = {
    create?: XOR<UsersCreateWithoutRefreshTokenInput, UsersUncheckedCreateWithoutRefreshTokenInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRefreshTokenInput
    upsert?: UsersUpsertWithoutRefreshTokenInput
    connect?: UsersWhereUniqueInput
    update?: XOR<UsersUpdateWithoutRefreshTokenInput, UsersUncheckedUpdateWithoutRefreshTokenInput>
  }

  export type CompaniesCreateNestedOneWithoutTicketsInput = {
    create?: XOR<CompaniesCreateWithoutTicketsInput, CompaniesUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: CompaniesCreateOrConnectWithoutTicketsInput
    connect?: CompaniesWhereUniqueInput
  }

  export type UsersTicketsCreateNestedOneWithoutTicketInput = {
    create?: XOR<UsersTicketsCreateWithoutTicketInput, UsersTicketsUncheckedCreateWithoutTicketInput>
    connectOrCreate?: UsersTicketsCreateOrConnectWithoutTicketInput
    connect?: UsersTicketsWhereUniqueInput
  }

  export type EventsCreateNestedOneWithoutTicketInput = {
    create?: XOR<EventsCreateWithoutTicketInput, EventsUncheckedCreateWithoutTicketInput>
    connectOrCreate?: EventsCreateOrConnectWithoutTicketInput
    connect?: EventsWhereUniqueInput
  }

  export type UsersTicketsUncheckedCreateNestedOneWithoutTicketInput = {
    create?: XOR<UsersTicketsCreateWithoutTicketInput, UsersTicketsUncheckedCreateWithoutTicketInput>
    connectOrCreate?: UsersTicketsCreateOrConnectWithoutTicketInput
    connect?: UsersTicketsWhereUniqueInput
  }

  export type EventsUncheckedCreateNestedOneWithoutTicketInput = {
    create?: XOR<EventsCreateWithoutTicketInput, EventsUncheckedCreateWithoutTicketInput>
    connectOrCreate?: EventsCreateOrConnectWithoutTicketInput
    connect?: EventsWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | number | string
    increment?: Decimal | number | string
    decrement?: Decimal | number | string
    multiply?: Decimal | number | string
    divide?: Decimal | number | string
  }

  export type CompaniesUpdateOneRequiredWithoutTicketsInput = {
    create?: XOR<CompaniesCreateWithoutTicketsInput, CompaniesUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: CompaniesCreateOrConnectWithoutTicketsInput
    upsert?: CompaniesUpsertWithoutTicketsInput
    connect?: CompaniesWhereUniqueInput
    update?: XOR<CompaniesUpdateWithoutTicketsInput, CompaniesUncheckedUpdateWithoutTicketsInput>
  }

  export type UsersTicketsUpdateOneWithoutTicketInput = {
    create?: XOR<UsersTicketsCreateWithoutTicketInput, UsersTicketsUncheckedCreateWithoutTicketInput>
    connectOrCreate?: UsersTicketsCreateOrConnectWithoutTicketInput
    upsert?: UsersTicketsUpsertWithoutTicketInput
    connect?: UsersTicketsWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<UsersTicketsUpdateWithoutTicketInput, UsersTicketsUncheckedUpdateWithoutTicketInput>
  }

  export type EventsUpdateOneWithoutTicketInput = {
    create?: XOR<EventsCreateWithoutTicketInput, EventsUncheckedCreateWithoutTicketInput>
    connectOrCreate?: EventsCreateOrConnectWithoutTicketInput
    upsert?: EventsUpsertWithoutTicketInput
    connect?: EventsWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<EventsUpdateWithoutTicketInput, EventsUncheckedUpdateWithoutTicketInput>
  }

  export type UsersTicketsUncheckedUpdateOneWithoutTicketInput = {
    create?: XOR<UsersTicketsCreateWithoutTicketInput, UsersTicketsUncheckedCreateWithoutTicketInput>
    connectOrCreate?: UsersTicketsCreateOrConnectWithoutTicketInput
    upsert?: UsersTicketsUpsertWithoutTicketInput
    connect?: UsersTicketsWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<UsersTicketsUpdateWithoutTicketInput, UsersTicketsUncheckedUpdateWithoutTicketInput>
  }

  export type EventsUncheckedUpdateOneWithoutTicketInput = {
    create?: XOR<EventsCreateWithoutTicketInput, EventsUncheckedCreateWithoutTicketInput>
    connectOrCreate?: EventsCreateOrConnectWithoutTicketInput
    upsert?: EventsUpsertWithoutTicketInput
    connect?: EventsWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<EventsUpdateWithoutTicketInput, EventsUncheckedUpdateWithoutTicketInput>
  }

  export type TicketsCreateNestedOneWithoutUsersTicketsInput = {
    create?: XOR<TicketsCreateWithoutUsersTicketsInput, TicketsUncheckedCreateWithoutUsersTicketsInput>
    connectOrCreate?: TicketsCreateOrConnectWithoutUsersTicketsInput
    connect?: TicketsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutUsersTicketsInput = {
    create?: XOR<UsersCreateWithoutUsersTicketsInput, UsersUncheckedCreateWithoutUsersTicketsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUsersTicketsInput
    connect?: UsersWhereUniqueInput
  }

  export type TicketsUpdateOneRequiredWithoutUsersTicketsInput = {
    create?: XOR<TicketsCreateWithoutUsersTicketsInput, TicketsUncheckedCreateWithoutUsersTicketsInput>
    connectOrCreate?: TicketsCreateOrConnectWithoutUsersTicketsInput
    upsert?: TicketsUpsertWithoutUsersTicketsInput
    connect?: TicketsWhereUniqueInput
    update?: XOR<TicketsUpdateWithoutUsersTicketsInput, TicketsUncheckedUpdateWithoutUsersTicketsInput>
  }

  export type UsersUpdateOneRequiredWithoutUsersTicketsInput = {
    create?: XOR<UsersCreateWithoutUsersTicketsInput, UsersUncheckedCreateWithoutUsersTicketsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUsersTicketsInput
    upsert?: UsersUpsertWithoutUsersTicketsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<UsersUpdateWithoutUsersTicketsInput, UsersUncheckedUpdateWithoutUsersTicketsInput>
  }

  export type TicketsCreateNestedOneWithoutEventsInput = {
    create?: XOR<TicketsCreateWithoutEventsInput, TicketsUncheckedCreateWithoutEventsInput>
    connectOrCreate?: TicketsCreateOrConnectWithoutEventsInput
    connect?: TicketsWhereUniqueInput
  }

  export type CompaniesCreateNestedOneWithoutEventsInput = {
    create?: XOR<CompaniesCreateWithoutEventsInput, CompaniesUncheckedCreateWithoutEventsInput>
    connectOrCreate?: CompaniesCreateOrConnectWithoutEventsInput
    connect?: CompaniesWhereUniqueInput
  }

  export type TicketsUpdateOneRequiredWithoutEventsInput = {
    create?: XOR<TicketsCreateWithoutEventsInput, TicketsUncheckedCreateWithoutEventsInput>
    connectOrCreate?: TicketsCreateOrConnectWithoutEventsInput
    upsert?: TicketsUpsertWithoutEventsInput
    connect?: TicketsWhereUniqueInput
    update?: XOR<TicketsUpdateWithoutEventsInput, TicketsUncheckedUpdateWithoutEventsInput>
  }

  export type CompaniesUpdateOneRequiredWithoutEventsInput = {
    create?: XOR<CompaniesCreateWithoutEventsInput, CompaniesUncheckedCreateWithoutEventsInput>
    connectOrCreate?: CompaniesCreateOrConnectWithoutEventsInput
    upsert?: CompaniesUpsertWithoutEventsInput
    connect?: CompaniesWhereUniqueInput
    update?: XOR<CompaniesUpdateWithoutEventsInput, CompaniesUncheckedUpdateWithoutEventsInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDecimalFilter = {
    equals?: Decimal | number | string
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalFilter | Decimal | number | string
  }

  export type NestedDecimalWithAggregatesFilter = {
    equals?: Decimal | number | string
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type RefreshTokensCreateWithoutUserInput = {
    id?: string
    expiresIn?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokensUncheckedCreateWithoutUserInput = {
    id?: string
    expiresIn?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokensCreateOrConnectWithoutUserInput = {
    where: RefreshTokensWhereUniqueInput
    create: XOR<RefreshTokensCreateWithoutUserInput, RefreshTokensUncheckedCreateWithoutUserInput>
  }

  export type UsersTicketsCreateWithoutUserInput = {
    id?: string
    quantity: number
    ticket: TicketsCreateNestedOneWithoutUsersTicketsInput
  }

  export type UsersTicketsUncheckedCreateWithoutUserInput = {
    id?: string
    ticketId: string
    quantity: number
  }

  export type UsersTicketsCreateOrConnectWithoutUserInput = {
    where: UsersTicketsWhereUniqueInput
    create: XOR<UsersTicketsCreateWithoutUserInput, UsersTicketsUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokensUpsertWithoutUserInput = {
    update: XOR<RefreshTokensUpdateWithoutUserInput, RefreshTokensUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokensCreateWithoutUserInput, RefreshTokensUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokensUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresIn?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokensUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresIn?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersTicketsUpsertWithoutUserInput = {
    update: XOR<UsersTicketsUpdateWithoutUserInput, UsersTicketsUncheckedUpdateWithoutUserInput>
    create: XOR<UsersTicketsCreateWithoutUserInput, UsersTicketsUncheckedCreateWithoutUserInput>
  }

  export type UsersTicketsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    ticket?: TicketsUpdateOneRequiredWithoutUsersTicketsInput
  }

  export type UsersTicketsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type TicketsCreateWithoutCompanyInput = {
    id?: string
    price: Decimal | number | string
    purchaseLimit: number
    deadline?: Date | string
    UsersTickets?: UsersTicketsCreateNestedOneWithoutTicketInput
    Events?: EventsCreateNestedOneWithoutTicketInput
  }

  export type TicketsUncheckedCreateWithoutCompanyInput = {
    id?: string
    price: Decimal | number | string
    purchaseLimit: number
    deadline?: Date | string
    UsersTickets?: UsersTicketsUncheckedCreateNestedOneWithoutTicketInput
    Events?: EventsUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketsCreateOrConnectWithoutCompanyInput = {
    where: TicketsWhereUniqueInput
    create: XOR<TicketsCreateWithoutCompanyInput, TicketsUncheckedCreateWithoutCompanyInput>
  }

  export type EventsCreateWithoutCompanyInput = {
    id?: string
    name: string
    description: string
    eventDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket: TicketsCreateNestedOneWithoutEventsInput
  }

  export type EventsUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    description: string
    ticketId: string
    eventDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventsCreateOrConnectWithoutCompanyInput = {
    where: EventsWhereUniqueInput
    create: XOR<EventsCreateWithoutCompanyInput, EventsUncheckedCreateWithoutCompanyInput>
  }

  export type TicketsUpsertWithoutCompanyInput = {
    update: XOR<TicketsUpdateWithoutCompanyInput, TicketsUncheckedUpdateWithoutCompanyInput>
    create: XOR<TicketsCreateWithoutCompanyInput, TicketsUncheckedCreateWithoutCompanyInput>
  }

  export type TicketsUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    purchaseLimit?: IntFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    UsersTickets?: UsersTicketsUpdateOneWithoutTicketInput
    Events?: EventsUpdateOneWithoutTicketInput
  }

  export type TicketsUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    purchaseLimit?: IntFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    UsersTickets?: UsersTicketsUncheckedUpdateOneWithoutTicketInput
    Events?: EventsUncheckedUpdateOneWithoutTicketInput
  }

  export type EventsUpsertWithoutCompanyInput = {
    update: XOR<EventsUpdateWithoutCompanyInput, EventsUncheckedUpdateWithoutCompanyInput>
    create: XOR<EventsCreateWithoutCompanyInput, EventsUncheckedCreateWithoutCompanyInput>
  }

  export type EventsUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketsUpdateOneRequiredWithoutEventsInput
  }

  export type EventsUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateWithoutRefreshTokenInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    UsersTickets?: UsersTicketsCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutRefreshTokenInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    UsersTickets?: UsersTicketsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutRefreshTokenInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutRefreshTokenInput, UsersUncheckedCreateWithoutRefreshTokenInput>
  }

  export type UsersUpsertWithoutRefreshTokenInput = {
    update: XOR<UsersUpdateWithoutRefreshTokenInput, UsersUncheckedUpdateWithoutRefreshTokenInput>
    create: XOR<UsersCreateWithoutRefreshTokenInput, UsersUncheckedCreateWithoutRefreshTokenInput>
  }

  export type UsersUpdateWithoutRefreshTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UsersTickets?: UsersTicketsUpdateOneWithoutUserInput
  }

  export type UsersUncheckedUpdateWithoutRefreshTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UsersTickets?: UsersTicketsUncheckedUpdateOneWithoutUserInput
  }

  export type CompaniesCreateWithoutTicketsInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Events?: EventsCreateNestedOneWithoutCompanyInput
  }

  export type CompaniesUncheckedCreateWithoutTicketsInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Events?: EventsUncheckedCreateNestedOneWithoutCompanyInput
  }

  export type CompaniesCreateOrConnectWithoutTicketsInput = {
    where: CompaniesWhereUniqueInput
    create: XOR<CompaniesCreateWithoutTicketsInput, CompaniesUncheckedCreateWithoutTicketsInput>
  }

  export type UsersTicketsCreateWithoutTicketInput = {
    id?: string
    quantity: number
    user: UsersCreateNestedOneWithoutUsersTicketsInput
  }

  export type UsersTicketsUncheckedCreateWithoutTicketInput = {
    id?: string
    userId: string
    quantity: number
  }

  export type UsersTicketsCreateOrConnectWithoutTicketInput = {
    where: UsersTicketsWhereUniqueInput
    create: XOR<UsersTicketsCreateWithoutTicketInput, UsersTicketsUncheckedCreateWithoutTicketInput>
  }

  export type EventsCreateWithoutTicketInput = {
    id?: string
    name: string
    description: string
    eventDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompaniesCreateNestedOneWithoutEventsInput
  }

  export type EventsUncheckedCreateWithoutTicketInput = {
    id?: string
    name: string
    description: string
    companyId: string
    eventDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventsCreateOrConnectWithoutTicketInput = {
    where: EventsWhereUniqueInput
    create: XOR<EventsCreateWithoutTicketInput, EventsUncheckedCreateWithoutTicketInput>
  }

  export type CompaniesUpsertWithoutTicketsInput = {
    update: XOR<CompaniesUpdateWithoutTicketsInput, CompaniesUncheckedUpdateWithoutTicketsInput>
    create: XOR<CompaniesCreateWithoutTicketsInput, CompaniesUncheckedCreateWithoutTicketsInput>
  }

  export type CompaniesUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Events?: EventsUpdateOneWithoutCompanyInput
  }

  export type CompaniesUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Events?: EventsUncheckedUpdateOneWithoutCompanyInput
  }

  export type UsersTicketsUpsertWithoutTicketInput = {
    update: XOR<UsersTicketsUpdateWithoutTicketInput, UsersTicketsUncheckedUpdateWithoutTicketInput>
    create: XOR<UsersTicketsCreateWithoutTicketInput, UsersTicketsUncheckedCreateWithoutTicketInput>
  }

  export type UsersTicketsUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    user?: UsersUpdateOneRequiredWithoutUsersTicketsInput
  }

  export type UsersTicketsUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type EventsUpsertWithoutTicketInput = {
    update: XOR<EventsUpdateWithoutTicketInput, EventsUncheckedUpdateWithoutTicketInput>
    create: XOR<EventsCreateWithoutTicketInput, EventsUncheckedCreateWithoutTicketInput>
  }

  export type EventsUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompaniesUpdateOneRequiredWithoutEventsInput
  }

  export type EventsUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketsCreateWithoutUsersTicketsInput = {
    id?: string
    price: Decimal | number | string
    purchaseLimit: number
    deadline?: Date | string
    company: CompaniesCreateNestedOneWithoutTicketsInput
    Events?: EventsCreateNestedOneWithoutTicketInput
  }

  export type TicketsUncheckedCreateWithoutUsersTicketsInput = {
    id?: string
    price: Decimal | number | string
    companyId: string
    purchaseLimit: number
    deadline?: Date | string
    Events?: EventsUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketsCreateOrConnectWithoutUsersTicketsInput = {
    where: TicketsWhereUniqueInput
    create: XOR<TicketsCreateWithoutUsersTicketsInput, TicketsUncheckedCreateWithoutUsersTicketsInput>
  }

  export type UsersCreateWithoutUsersTicketsInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    RefreshToken?: RefreshTokensCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutUsersTicketsInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    RefreshToken?: RefreshTokensUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutUsersTicketsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUsersTicketsInput, UsersUncheckedCreateWithoutUsersTicketsInput>
  }

  export type TicketsUpsertWithoutUsersTicketsInput = {
    update: XOR<TicketsUpdateWithoutUsersTicketsInput, TicketsUncheckedUpdateWithoutUsersTicketsInput>
    create: XOR<TicketsCreateWithoutUsersTicketsInput, TicketsUncheckedCreateWithoutUsersTicketsInput>
  }

  export type TicketsUpdateWithoutUsersTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    purchaseLimit?: IntFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompaniesUpdateOneRequiredWithoutTicketsInput
    Events?: EventsUpdateOneWithoutTicketInput
  }

  export type TicketsUncheckedUpdateWithoutUsersTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    companyId?: StringFieldUpdateOperationsInput | string
    purchaseLimit?: IntFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    Events?: EventsUncheckedUpdateOneWithoutTicketInput
  }

  export type UsersUpsertWithoutUsersTicketsInput = {
    update: XOR<UsersUpdateWithoutUsersTicketsInput, UsersUncheckedUpdateWithoutUsersTicketsInput>
    create: XOR<UsersCreateWithoutUsersTicketsInput, UsersUncheckedCreateWithoutUsersTicketsInput>
  }

  export type UsersUpdateWithoutUsersTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RefreshToken?: RefreshTokensUpdateOneWithoutUserInput
  }

  export type UsersUncheckedUpdateWithoutUsersTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RefreshToken?: RefreshTokensUncheckedUpdateOneWithoutUserInput
  }

  export type TicketsCreateWithoutEventsInput = {
    id?: string
    price: Decimal | number | string
    purchaseLimit: number
    deadline?: Date | string
    company: CompaniesCreateNestedOneWithoutTicketsInput
    UsersTickets?: UsersTicketsCreateNestedOneWithoutTicketInput
  }

  export type TicketsUncheckedCreateWithoutEventsInput = {
    id?: string
    price: Decimal | number | string
    companyId: string
    purchaseLimit: number
    deadline?: Date | string
    UsersTickets?: UsersTicketsUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketsCreateOrConnectWithoutEventsInput = {
    where: TicketsWhereUniqueInput
    create: XOR<TicketsCreateWithoutEventsInput, TicketsUncheckedCreateWithoutEventsInput>
  }

  export type CompaniesCreateWithoutEventsInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Tickets?: TicketsCreateNestedOneWithoutCompanyInput
  }

  export type CompaniesUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Tickets?: TicketsUncheckedCreateNestedOneWithoutCompanyInput
  }

  export type CompaniesCreateOrConnectWithoutEventsInput = {
    where: CompaniesWhereUniqueInput
    create: XOR<CompaniesCreateWithoutEventsInput, CompaniesUncheckedCreateWithoutEventsInput>
  }

  export type TicketsUpsertWithoutEventsInput = {
    update: XOR<TicketsUpdateWithoutEventsInput, TicketsUncheckedUpdateWithoutEventsInput>
    create: XOR<TicketsCreateWithoutEventsInput, TicketsUncheckedCreateWithoutEventsInput>
  }

  export type TicketsUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    purchaseLimit?: IntFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompaniesUpdateOneRequiredWithoutTicketsInput
    UsersTickets?: UsersTicketsUpdateOneWithoutTicketInput
  }

  export type TicketsUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    companyId?: StringFieldUpdateOperationsInput | string
    purchaseLimit?: IntFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    UsersTickets?: UsersTicketsUncheckedUpdateOneWithoutTicketInput
  }

  export type CompaniesUpsertWithoutEventsInput = {
    update: XOR<CompaniesUpdateWithoutEventsInput, CompaniesUncheckedUpdateWithoutEventsInput>
    create: XOR<CompaniesCreateWithoutEventsInput, CompaniesUncheckedCreateWithoutEventsInput>
  }

  export type CompaniesUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tickets?: TicketsUpdateOneWithoutCompanyInput
  }

  export type CompaniesUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tickets?: TicketsUncheckedUpdateOneWithoutCompanyInput
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}