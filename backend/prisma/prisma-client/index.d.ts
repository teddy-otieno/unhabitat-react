
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Region
 * 
 */
export type Region = $Result.DefaultSelection<Prisma.$RegionPayload>
/**
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>
/**
 * Model ThematicArea
 * 
 */
export type ThematicArea = $Result.DefaultSelection<Prisma.$ThematicAreaPayload>
/**
 * Model Programme
 * 
 */
export type Programme = $Result.DefaultSelection<Prisma.$ProgrammePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProgrammeType: {
  GLOBAL: 'GLOBAL',
  COUNTRY: 'COUNTRY',
  REGION: 'REGION',
  UN_REFORMS: 'UN_REFORMS',
  SOUTH_CORPOPRATION: 'SOUTH_CORPOPRATION'
};

export type ProgrammeType = (typeof ProgrammeType)[keyof typeof ProgrammeType]

}

export type ProgrammeType = $Enums.ProgrammeType

export const ProgrammeType: typeof $Enums.ProgrammeType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.region`: Exposes CRUD operations for the **Region** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.region.findMany()
    * ```
    */
  get region(): Prisma.RegionDelegate<ExtArgs>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs>;

  /**
   * `prisma.thematicArea`: Exposes CRUD operations for the **ThematicArea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ThematicAreas
    * const thematicAreas = await prisma.thematicArea.findMany()
    * ```
    */
  get thematicArea(): Prisma.ThematicAreaDelegate<ExtArgs>;

  /**
   * `prisma.programme`: Exposes CRUD operations for the **Programme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Programmes
    * const programmes = await prisma.programme.findMany()
    * ```
    */
  get programme(): Prisma.ProgrammeDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
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
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Region: 'Region',
    Country: 'Country',
    ThematicArea: 'ThematicArea',
    Programme: 'Programme'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'region' | 'country' | 'thematicArea' | 'programme'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Region: {
        payload: Prisma.$RegionPayload<ExtArgs>
        fields: Prisma.RegionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findFirst: {
            args: Prisma.RegionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findMany: {
            args: Prisma.RegionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          create: {
            args: Prisma.RegionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          createMany: {
            args: Prisma.RegionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RegionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          update: {
            args: Prisma.RegionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          deleteMany: {
            args: Prisma.RegionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RegionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RegionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          aggregate: {
            args: Prisma.RegionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRegion>
          }
          groupBy: {
            args: Prisma.RegionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RegionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegionCountArgs<ExtArgs>,
            result: $Utils.Optional<RegionCountAggregateOutputType> | number
          }
        }
      }
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>,
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      ThematicArea: {
        payload: Prisma.$ThematicAreaPayload<ExtArgs>
        fields: Prisma.ThematicAreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThematicAreaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThematicAreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThematicAreaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThematicAreaPayload>
          }
          findFirst: {
            args: Prisma.ThematicAreaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThematicAreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThematicAreaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThematicAreaPayload>
          }
          findMany: {
            args: Prisma.ThematicAreaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThematicAreaPayload>[]
          }
          create: {
            args: Prisma.ThematicAreaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThematicAreaPayload>
          }
          createMany: {
            args: Prisma.ThematicAreaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ThematicAreaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThematicAreaPayload>
          }
          update: {
            args: Prisma.ThematicAreaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThematicAreaPayload>
          }
          deleteMany: {
            args: Prisma.ThematicAreaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ThematicAreaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ThematicAreaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThematicAreaPayload>
          }
          aggregate: {
            args: Prisma.ThematicAreaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateThematicArea>
          }
          groupBy: {
            args: Prisma.ThematicAreaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ThematicAreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ThematicAreaCountArgs<ExtArgs>,
            result: $Utils.Optional<ThematicAreaCountAggregateOutputType> | number
          }
        }
      }
      Programme: {
        payload: Prisma.$ProgrammePayload<ExtArgs>
        fields: Prisma.ProgrammeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgrammeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgrammePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgrammeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgrammePayload>
          }
          findFirst: {
            args: Prisma.ProgrammeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgrammePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgrammeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgrammePayload>
          }
          findMany: {
            args: Prisma.ProgrammeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgrammePayload>[]
          }
          create: {
            args: Prisma.ProgrammeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgrammePayload>
          }
          createMany: {
            args: Prisma.ProgrammeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProgrammeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgrammePayload>
          }
          update: {
            args: Prisma.ProgrammeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgrammePayload>
          }
          deleteMany: {
            args: Prisma.ProgrammeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProgrammeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProgrammeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgrammePayload>
          }
          aggregate: {
            args: Prisma.ProgrammeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProgramme>
          }
          groupBy: {
            args: Prisma.ProgrammeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProgrammeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgrammeCountArgs<ExtArgs>,
            result: $Utils.Optional<ProgrammeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
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
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Programme: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Programme?: boolean | UserCountOutputTypeCountProgrammeArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProgrammeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgrammeWhereInput
  }



  /**
   * Count Type RegionCountOutputType
   */

  export type RegionCountOutputType = {
    Country: number
  }

  export type RegionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Country?: boolean | RegionCountOutputTypeCountCountryArgs
  }

  // Custom InputTypes

  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionCountOutputType
     */
    select?: RegionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeCountCountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
  }



  /**
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    Programme: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Programme?: boolean | CountryCountOutputTypeCountProgrammeArgs
  }

  // Custom InputTypes

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountProgrammeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgrammeWhereInput
  }



  /**
   * Count Type ThematicAreaCountOutputType
   */

  export type ThematicAreaCountOutputType = {
    Programme: number
  }

  export type ThematicAreaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Programme?: boolean | ThematicAreaCountOutputTypeCountProgrammeArgs
  }

  // Custom InputTypes

  /**
   * ThematicAreaCountOutputType without action
   */
  export type ThematicAreaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThematicAreaCountOutputType
     */
    select?: ThematicAreaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ThematicAreaCountOutputType without action
   */
  export type ThematicAreaCountOutputTypeCountProgrammeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgrammeWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    Programme?: boolean | User$ProgrammeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Programme?: boolean | User$ProgrammeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Programme: Prisma.$ProgrammePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Programme<T extends User$ProgrammeArgs<ExtArgs> = {}>(args?: Subset<T, User$ProgrammeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgrammePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.Programme
   */
  export type User$ProgrammeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programme
     */
    select?: ProgrammeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgrammeInclude<ExtArgs> | null
    where?: ProgrammeWhereInput
    orderBy?: ProgrammeOrderByWithRelationInput | ProgrammeOrderByWithRelationInput[]
    cursor?: ProgrammeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgrammeScalarFieldEnum | ProgrammeScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Region
   */

  export type AggregateRegion = {
    _count: RegionCountAggregateOutputType | null
    _avg: RegionAvgAggregateOutputType | null
    _sum: RegionSumAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  export type RegionAvgAggregateOutputType = {
    id: number | null
  }

  export type RegionSumAggregateOutputType = {
    id: number | null
  }

  export type RegionMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type RegionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type RegionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type RegionAvgAggregateInputType = {
    id?: true
  }

  export type RegionSumAggregateInputType = {
    id?: true
  }

  export type RegionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type RegionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type RegionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type RegionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Region to aggregate.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regions
    **/
    _count?: true | RegionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionMaxAggregateInputType
  }

  export type GetRegionAggregateType<T extends RegionAggregateArgs> = {
        [P in keyof T & keyof AggregateRegion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegion[P]>
      : GetScalarType<T[P], AggregateRegion[P]>
  }




  export type RegionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionWhereInput
    orderBy?: RegionOrderByWithAggregationInput | RegionOrderByWithAggregationInput[]
    by: RegionScalarFieldEnum[] | RegionScalarFieldEnum
    having?: RegionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionCountAggregateInputType | true
    _avg?: RegionAvgAggregateInputType
    _sum?: RegionSumAggregateInputType
    _min?: RegionMinAggregateInputType
    _max?: RegionMaxAggregateInputType
  }

  export type RegionGroupByOutputType = {
    id: number
    name: string
    description: string
    _count: RegionCountAggregateOutputType | null
    _avg: RegionAvgAggregateOutputType | null
    _sum: RegionSumAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  type GetRegionGroupByPayload<T extends RegionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionGroupByOutputType[P]>
            : GetScalarType<T[P], RegionGroupByOutputType[P]>
        }
      >
    >


  export type RegionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    Country?: boolean | Region$CountryArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["region"]>

  export type RegionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type RegionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Country?: boolean | Region$CountryArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RegionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Region"
    objects: {
      Country: Prisma.$CountryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
    }, ExtArgs["result"]["region"]>
    composites: {}
  }


  type RegionGetPayload<S extends boolean | null | undefined | RegionDefaultArgs> = $Result.GetResult<Prisma.$RegionPayload, S>

  type RegionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RegionFindManyArgs, 'select' | 'include'> & {
      select?: RegionCountAggregateInputType | true
    }

  export interface RegionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Region'], meta: { name: 'Region' } }
    /**
     * Find zero or one Region that matches the filter.
     * @param {RegionFindUniqueArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RegionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RegionFindUniqueArgs<ExtArgs>>
    ): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Region that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RegionFindUniqueOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RegionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RegionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Region that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RegionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RegionFindFirstArgs<ExtArgs>>
    ): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Region that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RegionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RegionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.region.findMany()
     * 
     * // Get first 10 Regions
     * const regions = await prisma.region.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regionWithIdOnly = await prisma.region.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RegionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RegionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Region.
     * @param {RegionCreateArgs} args - Arguments to create a Region.
     * @example
     * // Create one Region
     * const Region = await prisma.region.create({
     *   data: {
     *     // ... data to create a Region
     *   }
     * })
     * 
    **/
    create<T extends RegionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RegionCreateArgs<ExtArgs>>
    ): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Regions.
     *     @param {RegionCreateManyArgs} args - Arguments to create many Regions.
     *     @example
     *     // Create many Regions
     *     const region = await prisma.region.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RegionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RegionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Region.
     * @param {RegionDeleteArgs} args - Arguments to delete one Region.
     * @example
     * // Delete one Region
     * const Region = await prisma.region.delete({
     *   where: {
     *     // ... filter to delete one Region
     *   }
     * })
     * 
    **/
    delete<T extends RegionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RegionDeleteArgs<ExtArgs>>
    ): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Region.
     * @param {RegionUpdateArgs} args - Arguments to update one Region.
     * @example
     * // Update one Region
     * const region = await prisma.region.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RegionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RegionUpdateArgs<ExtArgs>>
    ): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Regions.
     * @param {RegionDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.region.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RegionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RegionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RegionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RegionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Region.
     * @param {RegionUpsertArgs} args - Arguments to update or create a Region.
     * @example
     * // Update or create a Region
     * const region = await prisma.region.upsert({
     *   create: {
     *     // ... data to create a Region
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Region we want to update
     *   }
     * })
    **/
    upsert<T extends RegionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RegionUpsertArgs<ExtArgs>>
    ): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.region.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends RegionCountArgs>(
      args?: Subset<T, RegionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegionAggregateArgs>(args: Subset<T, RegionAggregateArgs>): Prisma.PrismaPromise<GetRegionAggregateType<T>>

    /**
     * Group by Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionGroupByArgs} args - Group by arguments.
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
      T extends RegionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegionGroupByArgs['orderBy'] }
        : { orderBy?: RegionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RegionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Region model
   */
  readonly fields: RegionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Region.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Country<T extends Region$CountryArgs<ExtArgs> = {}>(args?: Subset<T, Region$CountryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Region model
   */ 
  interface RegionFieldRefs {
    readonly id: FieldRef<"Region", 'Int'>
    readonly name: FieldRef<"Region", 'String'>
    readonly description: FieldRef<"Region", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Region findUnique
   */
  export type RegionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }


  /**
   * Region findUniqueOrThrow
   */
  export type RegionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }


  /**
   * Region findFirst
   */
  export type RegionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }


  /**
   * Region findFirstOrThrow
   */
  export type RegionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }


  /**
   * Region findMany
   */
  export type RegionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }


  /**
   * Region create
   */
  export type RegionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to create a Region.
     */
    data: XOR<RegionCreateInput, RegionUncheckedCreateInput>
  }


  /**
   * Region createMany
   */
  export type RegionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Region update
   */
  export type RegionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to update a Region.
     */
    data: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
    /**
     * Choose, which Region to update.
     */
    where: RegionWhereUniqueInput
  }


  /**
   * Region updateMany
   */
  export type RegionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
  }


  /**
   * Region upsert
   */
  export type RegionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The filter to search for the Region to update in case it exists.
     */
    where: RegionWhereUniqueInput
    /**
     * In case the Region found by the `where` argument doesn't exist, create a new Region with this data.
     */
    create: XOR<RegionCreateInput, RegionUncheckedCreateInput>
    /**
     * In case the Region was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
  }


  /**
   * Region delete
   */
  export type RegionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter which Region to delete.
     */
    where: RegionWhereUniqueInput
  }


  /**
   * Region deleteMany
   */
  export type RegionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regions to delete
     */
    where?: RegionWhereInput
  }


  /**
   * Region.Country
   */
  export type Region$CountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    cursor?: CountryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }


  /**
   * Region without action
   */
  export type RegionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegionInclude<ExtArgs> | null
  }



  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryAvgAggregateOutputType = {
    id: number | null
    regionId: number | null
  }

  export type CountrySumAggregateOutputType = {
    id: number | null
    regionId: number | null
  }

  export type CountryMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    regionId: number | null
  }

  export type CountryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    regionId: number | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    regionId: number
    _all: number
  }


  export type CountryAvgAggregateInputType = {
    id?: true
    regionId?: true
  }

  export type CountrySumAggregateInputType = {
    id?: true
    regionId?: true
  }

  export type CountryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    regionId?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    regionId?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    regionId?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _avg?: CountryAvgAggregateInputType
    _sum?: CountrySumAggregateInputType
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    id: number
    name: string
    description: string
    regionId: number
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    regionId?: boolean
    region?: boolean | RegionDefaultArgs<ExtArgs>
    Programme?: boolean | Country$ProgrammeArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    regionId?: boolean
  }

  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | RegionDefaultArgs<ExtArgs>
    Programme?: boolean | Country$ProgrammeArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      region: Prisma.$RegionPayload<ExtArgs>
      Programme: Prisma.$ProgrammePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      regionId: number
    }, ExtArgs["result"]["country"]>
    composites: {}
  }


  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CountryFindManyArgs, 'select' | 'include'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CountryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>
    ): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Country that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CountryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>
    ): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CountryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
    **/
    create<T extends CountryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CountryCreateArgs<ExtArgs>>
    ): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Countries.
     *     @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     *     @example
     *     // Create many Countries
     *     const country = await prisma.country.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CountryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
    **/
    delete<T extends CountryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>
    ): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CountryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>
    ): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CountryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CountryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
    **/
    upsert<T extends CountryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>
    ): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
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
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    region<T extends RegionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegionDefaultArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Programme<T extends Country$ProgrammeArgs<ExtArgs> = {}>(args?: Subset<T, Country$ProgrammeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgrammePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Country model
   */ 
  interface CountryFieldRefs {
    readonly id: FieldRef<"Country", 'Int'>
    readonly name: FieldRef<"Country", 'String'>
    readonly description: FieldRef<"Country", 'String'>
    readonly regionId: FieldRef<"Country", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }


  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }


  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }


  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }


  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }


  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }


  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }


  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
  }


  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }


  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }


  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
  }


  /**
   * Country.Programme
   */
  export type Country$ProgrammeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programme
     */
    select?: ProgrammeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgrammeInclude<ExtArgs> | null
    where?: ProgrammeWhereInput
    orderBy?: ProgrammeOrderByWithRelationInput | ProgrammeOrderByWithRelationInput[]
    cursor?: ProgrammeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgrammeScalarFieldEnum | ProgrammeScalarFieldEnum[]
  }


  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
  }



  /**
   * Model ThematicArea
   */

  export type AggregateThematicArea = {
    _count: ThematicAreaCountAggregateOutputType | null
    _avg: ThematicAreaAvgAggregateOutputType | null
    _sum: ThematicAreaSumAggregateOutputType | null
    _min: ThematicAreaMinAggregateOutputType | null
    _max: ThematicAreaMaxAggregateOutputType | null
  }

  export type ThematicAreaAvgAggregateOutputType = {
    id: number | null
  }

  export type ThematicAreaSumAggregateOutputType = {
    id: number | null
  }

  export type ThematicAreaMinAggregateOutputType = {
    id: number | null
    name: string | null
    descrviption: string | null
  }

  export type ThematicAreaMaxAggregateOutputType = {
    id: number | null
    name: string | null
    descrviption: string | null
  }

  export type ThematicAreaCountAggregateOutputType = {
    id: number
    name: number
    descrviption: number
    _all: number
  }


  export type ThematicAreaAvgAggregateInputType = {
    id?: true
  }

  export type ThematicAreaSumAggregateInputType = {
    id?: true
  }

  export type ThematicAreaMinAggregateInputType = {
    id?: true
    name?: true
    descrviption?: true
  }

  export type ThematicAreaMaxAggregateInputType = {
    id?: true
    name?: true
    descrviption?: true
  }

  export type ThematicAreaCountAggregateInputType = {
    id?: true
    name?: true
    descrviption?: true
    _all?: true
  }

  export type ThematicAreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ThematicArea to aggregate.
     */
    where?: ThematicAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThematicAreas to fetch.
     */
    orderBy?: ThematicAreaOrderByWithRelationInput | ThematicAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThematicAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThematicAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThematicAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ThematicAreas
    **/
    _count?: true | ThematicAreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ThematicAreaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ThematicAreaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThematicAreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThematicAreaMaxAggregateInputType
  }

  export type GetThematicAreaAggregateType<T extends ThematicAreaAggregateArgs> = {
        [P in keyof T & keyof AggregateThematicArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThematicArea[P]>
      : GetScalarType<T[P], AggregateThematicArea[P]>
  }




  export type ThematicAreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThematicAreaWhereInput
    orderBy?: ThematicAreaOrderByWithAggregationInput | ThematicAreaOrderByWithAggregationInput[]
    by: ThematicAreaScalarFieldEnum[] | ThematicAreaScalarFieldEnum
    having?: ThematicAreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThematicAreaCountAggregateInputType | true
    _avg?: ThematicAreaAvgAggregateInputType
    _sum?: ThematicAreaSumAggregateInputType
    _min?: ThematicAreaMinAggregateInputType
    _max?: ThematicAreaMaxAggregateInputType
  }

  export type ThematicAreaGroupByOutputType = {
    id: number
    name: string
    descrviption: string
    _count: ThematicAreaCountAggregateOutputType | null
    _avg: ThematicAreaAvgAggregateOutputType | null
    _sum: ThematicAreaSumAggregateOutputType | null
    _min: ThematicAreaMinAggregateOutputType | null
    _max: ThematicAreaMaxAggregateOutputType | null
  }

  type GetThematicAreaGroupByPayload<T extends ThematicAreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThematicAreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThematicAreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThematicAreaGroupByOutputType[P]>
            : GetScalarType<T[P], ThematicAreaGroupByOutputType[P]>
        }
      >
    >


  export type ThematicAreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    descrviption?: boolean
    Programme?: boolean | ThematicArea$ProgrammeArgs<ExtArgs>
    _count?: boolean | ThematicAreaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thematicArea"]>

  export type ThematicAreaSelectScalar = {
    id?: boolean
    name?: boolean
    descrviption?: boolean
  }

  export type ThematicAreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Programme?: boolean | ThematicArea$ProgrammeArgs<ExtArgs>
    _count?: boolean | ThematicAreaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ThematicAreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ThematicArea"
    objects: {
      Programme: Prisma.$ProgrammePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      descrviption: string
    }, ExtArgs["result"]["thematicArea"]>
    composites: {}
  }


  type ThematicAreaGetPayload<S extends boolean | null | undefined | ThematicAreaDefaultArgs> = $Result.GetResult<Prisma.$ThematicAreaPayload, S>

  type ThematicAreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ThematicAreaFindManyArgs, 'select' | 'include'> & {
      select?: ThematicAreaCountAggregateInputType | true
    }

  export interface ThematicAreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ThematicArea'], meta: { name: 'ThematicArea' } }
    /**
     * Find zero or one ThematicArea that matches the filter.
     * @param {ThematicAreaFindUniqueArgs} args - Arguments to find a ThematicArea
     * @example
     * // Get one ThematicArea
     * const thematicArea = await prisma.thematicArea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ThematicAreaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ThematicAreaFindUniqueArgs<ExtArgs>>
    ): Prisma__ThematicAreaClient<$Result.GetResult<Prisma.$ThematicAreaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ThematicArea that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ThematicAreaFindUniqueOrThrowArgs} args - Arguments to find a ThematicArea
     * @example
     * // Get one ThematicArea
     * const thematicArea = await prisma.thematicArea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ThematicAreaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ThematicAreaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ThematicAreaClient<$Result.GetResult<Prisma.$ThematicAreaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ThematicArea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThematicAreaFindFirstArgs} args - Arguments to find a ThematicArea
     * @example
     * // Get one ThematicArea
     * const thematicArea = await prisma.thematicArea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ThematicAreaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ThematicAreaFindFirstArgs<ExtArgs>>
    ): Prisma__ThematicAreaClient<$Result.GetResult<Prisma.$ThematicAreaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ThematicArea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThematicAreaFindFirstOrThrowArgs} args - Arguments to find a ThematicArea
     * @example
     * // Get one ThematicArea
     * const thematicArea = await prisma.thematicArea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ThematicAreaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ThematicAreaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ThematicAreaClient<$Result.GetResult<Prisma.$ThematicAreaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ThematicAreas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThematicAreaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ThematicAreas
     * const thematicAreas = await prisma.thematicArea.findMany()
     * 
     * // Get first 10 ThematicAreas
     * const thematicAreas = await prisma.thematicArea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const thematicAreaWithIdOnly = await prisma.thematicArea.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ThematicAreaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ThematicAreaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThematicAreaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ThematicArea.
     * @param {ThematicAreaCreateArgs} args - Arguments to create a ThematicArea.
     * @example
     * // Create one ThematicArea
     * const ThematicArea = await prisma.thematicArea.create({
     *   data: {
     *     // ... data to create a ThematicArea
     *   }
     * })
     * 
    **/
    create<T extends ThematicAreaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ThematicAreaCreateArgs<ExtArgs>>
    ): Prisma__ThematicAreaClient<$Result.GetResult<Prisma.$ThematicAreaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ThematicAreas.
     *     @param {ThematicAreaCreateManyArgs} args - Arguments to create many ThematicAreas.
     *     @example
     *     // Create many ThematicAreas
     *     const thematicArea = await prisma.thematicArea.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ThematicAreaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ThematicAreaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ThematicArea.
     * @param {ThematicAreaDeleteArgs} args - Arguments to delete one ThematicArea.
     * @example
     * // Delete one ThematicArea
     * const ThematicArea = await prisma.thematicArea.delete({
     *   where: {
     *     // ... filter to delete one ThematicArea
     *   }
     * })
     * 
    **/
    delete<T extends ThematicAreaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ThematicAreaDeleteArgs<ExtArgs>>
    ): Prisma__ThematicAreaClient<$Result.GetResult<Prisma.$ThematicAreaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ThematicArea.
     * @param {ThematicAreaUpdateArgs} args - Arguments to update one ThematicArea.
     * @example
     * // Update one ThematicArea
     * const thematicArea = await prisma.thematicArea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ThematicAreaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ThematicAreaUpdateArgs<ExtArgs>>
    ): Prisma__ThematicAreaClient<$Result.GetResult<Prisma.$ThematicAreaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ThematicAreas.
     * @param {ThematicAreaDeleteManyArgs} args - Arguments to filter ThematicAreas to delete.
     * @example
     * // Delete a few ThematicAreas
     * const { count } = await prisma.thematicArea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ThematicAreaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ThematicAreaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ThematicAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThematicAreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ThematicAreas
     * const thematicArea = await prisma.thematicArea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ThematicAreaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ThematicAreaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ThematicArea.
     * @param {ThematicAreaUpsertArgs} args - Arguments to update or create a ThematicArea.
     * @example
     * // Update or create a ThematicArea
     * const thematicArea = await prisma.thematicArea.upsert({
     *   create: {
     *     // ... data to create a ThematicArea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ThematicArea we want to update
     *   }
     * })
    **/
    upsert<T extends ThematicAreaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ThematicAreaUpsertArgs<ExtArgs>>
    ): Prisma__ThematicAreaClient<$Result.GetResult<Prisma.$ThematicAreaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ThematicAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThematicAreaCountArgs} args - Arguments to filter ThematicAreas to count.
     * @example
     * // Count the number of ThematicAreas
     * const count = await prisma.thematicArea.count({
     *   where: {
     *     // ... the filter for the ThematicAreas we want to count
     *   }
     * })
    **/
    count<T extends ThematicAreaCountArgs>(
      args?: Subset<T, ThematicAreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThematicAreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ThematicArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThematicAreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ThematicAreaAggregateArgs>(args: Subset<T, ThematicAreaAggregateArgs>): Prisma.PrismaPromise<GetThematicAreaAggregateType<T>>

    /**
     * Group by ThematicArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThematicAreaGroupByArgs} args - Group by arguments.
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
      T extends ThematicAreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThematicAreaGroupByArgs['orderBy'] }
        : { orderBy?: ThematicAreaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ThematicAreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThematicAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ThematicArea model
   */
  readonly fields: ThematicAreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ThematicArea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThematicAreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Programme<T extends ThematicArea$ProgrammeArgs<ExtArgs> = {}>(args?: Subset<T, ThematicArea$ProgrammeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgrammePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ThematicArea model
   */ 
  interface ThematicAreaFieldRefs {
    readonly id: FieldRef<"ThematicArea", 'Int'>
    readonly name: FieldRef<"ThematicArea", 'String'>
    readonly descrviption: FieldRef<"ThematicArea", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ThematicArea findUnique
   */
  export type ThematicAreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThematicArea
     */
    select?: ThematicAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThematicAreaInclude<ExtArgs> | null
    /**
     * Filter, which ThematicArea to fetch.
     */
    where: ThematicAreaWhereUniqueInput
  }


  /**
   * ThematicArea findUniqueOrThrow
   */
  export type ThematicAreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThematicArea
     */
    select?: ThematicAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThematicAreaInclude<ExtArgs> | null
    /**
     * Filter, which ThematicArea to fetch.
     */
    where: ThematicAreaWhereUniqueInput
  }


  /**
   * ThematicArea findFirst
   */
  export type ThematicAreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThematicArea
     */
    select?: ThematicAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThematicAreaInclude<ExtArgs> | null
    /**
     * Filter, which ThematicArea to fetch.
     */
    where?: ThematicAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThematicAreas to fetch.
     */
    orderBy?: ThematicAreaOrderByWithRelationInput | ThematicAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ThematicAreas.
     */
    cursor?: ThematicAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThematicAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThematicAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ThematicAreas.
     */
    distinct?: ThematicAreaScalarFieldEnum | ThematicAreaScalarFieldEnum[]
  }


  /**
   * ThematicArea findFirstOrThrow
   */
  export type ThematicAreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThematicArea
     */
    select?: ThematicAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThematicAreaInclude<ExtArgs> | null
    /**
     * Filter, which ThematicArea to fetch.
     */
    where?: ThematicAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThematicAreas to fetch.
     */
    orderBy?: ThematicAreaOrderByWithRelationInput | ThematicAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ThematicAreas.
     */
    cursor?: ThematicAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThematicAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThematicAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ThematicAreas.
     */
    distinct?: ThematicAreaScalarFieldEnum | ThematicAreaScalarFieldEnum[]
  }


  /**
   * ThematicArea findMany
   */
  export type ThematicAreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThematicArea
     */
    select?: ThematicAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThematicAreaInclude<ExtArgs> | null
    /**
     * Filter, which ThematicAreas to fetch.
     */
    where?: ThematicAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThematicAreas to fetch.
     */
    orderBy?: ThematicAreaOrderByWithRelationInput | ThematicAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ThematicAreas.
     */
    cursor?: ThematicAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThematicAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThematicAreas.
     */
    skip?: number
    distinct?: ThematicAreaScalarFieldEnum | ThematicAreaScalarFieldEnum[]
  }


  /**
   * ThematicArea create
   */
  export type ThematicAreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThematicArea
     */
    select?: ThematicAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThematicAreaInclude<ExtArgs> | null
    /**
     * The data needed to create a ThematicArea.
     */
    data: XOR<ThematicAreaCreateInput, ThematicAreaUncheckedCreateInput>
  }


  /**
   * ThematicArea createMany
   */
  export type ThematicAreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ThematicAreas.
     */
    data: ThematicAreaCreateManyInput | ThematicAreaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ThematicArea update
   */
  export type ThematicAreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThematicArea
     */
    select?: ThematicAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThematicAreaInclude<ExtArgs> | null
    /**
     * The data needed to update a ThematicArea.
     */
    data: XOR<ThematicAreaUpdateInput, ThematicAreaUncheckedUpdateInput>
    /**
     * Choose, which ThematicArea to update.
     */
    where: ThematicAreaWhereUniqueInput
  }


  /**
   * ThematicArea updateMany
   */
  export type ThematicAreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ThematicAreas.
     */
    data: XOR<ThematicAreaUpdateManyMutationInput, ThematicAreaUncheckedUpdateManyInput>
    /**
     * Filter which ThematicAreas to update
     */
    where?: ThematicAreaWhereInput
  }


  /**
   * ThematicArea upsert
   */
  export type ThematicAreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThematicArea
     */
    select?: ThematicAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThematicAreaInclude<ExtArgs> | null
    /**
     * The filter to search for the ThematicArea to update in case it exists.
     */
    where: ThematicAreaWhereUniqueInput
    /**
     * In case the ThematicArea found by the `where` argument doesn't exist, create a new ThematicArea with this data.
     */
    create: XOR<ThematicAreaCreateInput, ThematicAreaUncheckedCreateInput>
    /**
     * In case the ThematicArea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThematicAreaUpdateInput, ThematicAreaUncheckedUpdateInput>
  }


  /**
   * ThematicArea delete
   */
  export type ThematicAreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThematicArea
     */
    select?: ThematicAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThematicAreaInclude<ExtArgs> | null
    /**
     * Filter which ThematicArea to delete.
     */
    where: ThematicAreaWhereUniqueInput
  }


  /**
   * ThematicArea deleteMany
   */
  export type ThematicAreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ThematicAreas to delete
     */
    where?: ThematicAreaWhereInput
  }


  /**
   * ThematicArea.Programme
   */
  export type ThematicArea$ProgrammeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programme
     */
    select?: ProgrammeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgrammeInclude<ExtArgs> | null
    where?: ProgrammeWhereInput
    orderBy?: ProgrammeOrderByWithRelationInput | ProgrammeOrderByWithRelationInput[]
    cursor?: ProgrammeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgrammeScalarFieldEnum | ProgrammeScalarFieldEnum[]
  }


  /**
   * ThematicArea without action
   */
  export type ThematicAreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThematicArea
     */
    select?: ThematicAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThematicAreaInclude<ExtArgs> | null
  }



  /**
   * Model Programme
   */

  export type AggregateProgramme = {
    _count: ProgrammeCountAggregateOutputType | null
    _avg: ProgrammeAvgAggregateOutputType | null
    _sum: ProgrammeSumAggregateOutputType | null
    _min: ProgrammeMinAggregateOutputType | null
    _max: ProgrammeMaxAggregateOutputType | null
  }

  export type ProgrammeAvgAggregateOutputType = {
    id: number | null
    region_id: number | null
    authorId: number | null
    thematicAreaId: number | null
    countryId: number | null
  }

  export type ProgrammeSumAggregateOutputType = {
    id: number | null
    region_id: number | null
    authorId: number | null
    thematicAreaId: number | null
    countryId: number | null
  }

  export type ProgrammeMinAggregateOutputType = {
    id: number | null
    programme_type: $Enums.ProgrammeType | null
    region_id: number | null
    cover_image: string | null
    title: string | null
    description: string | null
    content: string | null
    created: Date | null
    authorId: number | null
    thematicAreaId: number | null
    countryId: number | null
  }

  export type ProgrammeMaxAggregateOutputType = {
    id: number | null
    programme_type: $Enums.ProgrammeType | null
    region_id: number | null
    cover_image: string | null
    title: string | null
    description: string | null
    content: string | null
    created: Date | null
    authorId: number | null
    thematicAreaId: number | null
    countryId: number | null
  }

  export type ProgrammeCountAggregateOutputType = {
    id: number
    programme_type: number
    region_id: number
    cover_image: number
    title: number
    description: number
    content: number
    created: number
    authorId: number
    thematicAreaId: number
    countryId: number
    _all: number
  }


  export type ProgrammeAvgAggregateInputType = {
    id?: true
    region_id?: true
    authorId?: true
    thematicAreaId?: true
    countryId?: true
  }

  export type ProgrammeSumAggregateInputType = {
    id?: true
    region_id?: true
    authorId?: true
    thematicAreaId?: true
    countryId?: true
  }

  export type ProgrammeMinAggregateInputType = {
    id?: true
    programme_type?: true
    region_id?: true
    cover_image?: true
    title?: true
    description?: true
    content?: true
    created?: true
    authorId?: true
    thematicAreaId?: true
    countryId?: true
  }

  export type ProgrammeMaxAggregateInputType = {
    id?: true
    programme_type?: true
    region_id?: true
    cover_image?: true
    title?: true
    description?: true
    content?: true
    created?: true
    authorId?: true
    thematicAreaId?: true
    countryId?: true
  }

  export type ProgrammeCountAggregateInputType = {
    id?: true
    programme_type?: true
    region_id?: true
    cover_image?: true
    title?: true
    description?: true
    content?: true
    created?: true
    authorId?: true
    thematicAreaId?: true
    countryId?: true
    _all?: true
  }

  export type ProgrammeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Programme to aggregate.
     */
    where?: ProgrammeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programmes to fetch.
     */
    orderBy?: ProgrammeOrderByWithRelationInput | ProgrammeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgrammeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Programmes
    **/
    _count?: true | ProgrammeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgrammeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgrammeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgrammeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgrammeMaxAggregateInputType
  }

  export type GetProgrammeAggregateType<T extends ProgrammeAggregateArgs> = {
        [P in keyof T & keyof AggregateProgramme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgramme[P]>
      : GetScalarType<T[P], AggregateProgramme[P]>
  }




  export type ProgrammeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgrammeWhereInput
    orderBy?: ProgrammeOrderByWithAggregationInput | ProgrammeOrderByWithAggregationInput[]
    by: ProgrammeScalarFieldEnum[] | ProgrammeScalarFieldEnum
    having?: ProgrammeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgrammeCountAggregateInputType | true
    _avg?: ProgrammeAvgAggregateInputType
    _sum?: ProgrammeSumAggregateInputType
    _min?: ProgrammeMinAggregateInputType
    _max?: ProgrammeMaxAggregateInputType
  }

  export type ProgrammeGroupByOutputType = {
    id: number
    programme_type: $Enums.ProgrammeType
    region_id: number
    cover_image: string
    title: string
    description: string
    content: string
    created: Date
    authorId: number
    thematicAreaId: number | null
    countryId: number | null
    _count: ProgrammeCountAggregateOutputType | null
    _avg: ProgrammeAvgAggregateOutputType | null
    _sum: ProgrammeSumAggregateOutputType | null
    _min: ProgrammeMinAggregateOutputType | null
    _max: ProgrammeMaxAggregateOutputType | null
  }

  type GetProgrammeGroupByPayload<T extends ProgrammeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgrammeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgrammeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgrammeGroupByOutputType[P]>
            : GetScalarType<T[P], ProgrammeGroupByOutputType[P]>
        }
      >
    >


  export type ProgrammeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    programme_type?: boolean
    region_id?: boolean
    cover_image?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    created?: boolean
    authorId?: boolean
    thematicAreaId?: boolean
    countryId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    thematic_area?: boolean | Programme$thematic_areaArgs<ExtArgs>
    country?: boolean | Programme$countryArgs<ExtArgs>
  }, ExtArgs["result"]["programme"]>

  export type ProgrammeSelectScalar = {
    id?: boolean
    programme_type?: boolean
    region_id?: boolean
    cover_image?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    created?: boolean
    authorId?: boolean
    thematicAreaId?: boolean
    countryId?: boolean
  }

  export type ProgrammeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    thematic_area?: boolean | Programme$thematic_areaArgs<ExtArgs>
    country?: boolean | Programme$countryArgs<ExtArgs>
  }


  export type $ProgrammePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Programme"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      thematic_area: Prisma.$ThematicAreaPayload<ExtArgs> | null
      country: Prisma.$CountryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      programme_type: $Enums.ProgrammeType
      region_id: number
      cover_image: string
      title: string
      description: string
      content: string
      created: Date
      authorId: number
      thematicAreaId: number | null
      countryId: number | null
    }, ExtArgs["result"]["programme"]>
    composites: {}
  }


  type ProgrammeGetPayload<S extends boolean | null | undefined | ProgrammeDefaultArgs> = $Result.GetResult<Prisma.$ProgrammePayload, S>

  type ProgrammeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProgrammeFindManyArgs, 'select' | 'include'> & {
      select?: ProgrammeCountAggregateInputType | true
    }

  export interface ProgrammeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Programme'], meta: { name: 'Programme' } }
    /**
     * Find zero or one Programme that matches the filter.
     * @param {ProgrammeFindUniqueArgs} args - Arguments to find a Programme
     * @example
     * // Get one Programme
     * const programme = await prisma.programme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProgrammeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProgrammeFindUniqueArgs<ExtArgs>>
    ): Prisma__ProgrammeClient<$Result.GetResult<Prisma.$ProgrammePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Programme that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProgrammeFindUniqueOrThrowArgs} args - Arguments to find a Programme
     * @example
     * // Get one Programme
     * const programme = await prisma.programme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProgrammeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgrammeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProgrammeClient<$Result.GetResult<Prisma.$ProgrammePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Programme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammeFindFirstArgs} args - Arguments to find a Programme
     * @example
     * // Get one Programme
     * const programme = await prisma.programme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProgrammeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgrammeFindFirstArgs<ExtArgs>>
    ): Prisma__ProgrammeClient<$Result.GetResult<Prisma.$ProgrammePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Programme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammeFindFirstOrThrowArgs} args - Arguments to find a Programme
     * @example
     * // Get one Programme
     * const programme = await prisma.programme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProgrammeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgrammeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProgrammeClient<$Result.GetResult<Prisma.$ProgrammePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Programmes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Programmes
     * const programmes = await prisma.programme.findMany()
     * 
     * // Get first 10 Programmes
     * const programmes = await prisma.programme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programmeWithIdOnly = await prisma.programme.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProgrammeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgrammeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgrammePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Programme.
     * @param {ProgrammeCreateArgs} args - Arguments to create a Programme.
     * @example
     * // Create one Programme
     * const Programme = await prisma.programme.create({
     *   data: {
     *     // ... data to create a Programme
     *   }
     * })
     * 
    **/
    create<T extends ProgrammeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProgrammeCreateArgs<ExtArgs>>
    ): Prisma__ProgrammeClient<$Result.GetResult<Prisma.$ProgrammePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Programmes.
     *     @param {ProgrammeCreateManyArgs} args - Arguments to create many Programmes.
     *     @example
     *     // Create many Programmes
     *     const programme = await prisma.programme.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProgrammeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgrammeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Programme.
     * @param {ProgrammeDeleteArgs} args - Arguments to delete one Programme.
     * @example
     * // Delete one Programme
     * const Programme = await prisma.programme.delete({
     *   where: {
     *     // ... filter to delete one Programme
     *   }
     * })
     * 
    **/
    delete<T extends ProgrammeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProgrammeDeleteArgs<ExtArgs>>
    ): Prisma__ProgrammeClient<$Result.GetResult<Prisma.$ProgrammePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Programme.
     * @param {ProgrammeUpdateArgs} args - Arguments to update one Programme.
     * @example
     * // Update one Programme
     * const programme = await prisma.programme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProgrammeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProgrammeUpdateArgs<ExtArgs>>
    ): Prisma__ProgrammeClient<$Result.GetResult<Prisma.$ProgrammePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Programmes.
     * @param {ProgrammeDeleteManyArgs} args - Arguments to filter Programmes to delete.
     * @example
     * // Delete a few Programmes
     * const { count } = await prisma.programme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProgrammeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgrammeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programmes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Programmes
     * const programme = await prisma.programme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProgrammeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProgrammeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Programme.
     * @param {ProgrammeUpsertArgs} args - Arguments to update or create a Programme.
     * @example
     * // Update or create a Programme
     * const programme = await prisma.programme.upsert({
     *   create: {
     *     // ... data to create a Programme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Programme we want to update
     *   }
     * })
    **/
    upsert<T extends ProgrammeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProgrammeUpsertArgs<ExtArgs>>
    ): Prisma__ProgrammeClient<$Result.GetResult<Prisma.$ProgrammePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Programmes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammeCountArgs} args - Arguments to filter Programmes to count.
     * @example
     * // Count the number of Programmes
     * const count = await prisma.programme.count({
     *   where: {
     *     // ... the filter for the Programmes we want to count
     *   }
     * })
    **/
    count<T extends ProgrammeCountArgs>(
      args?: Subset<T, ProgrammeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgrammeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Programme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgrammeAggregateArgs>(args: Subset<T, ProgrammeAggregateArgs>): Prisma.PrismaPromise<GetProgrammeAggregateType<T>>

    /**
     * Group by Programme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammeGroupByArgs} args - Group by arguments.
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
      T extends ProgrammeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgrammeGroupByArgs['orderBy'] }
        : { orderBy?: ProgrammeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProgrammeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgrammeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Programme model
   */
  readonly fields: ProgrammeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Programme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgrammeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    thematic_area<T extends Programme$thematic_areaArgs<ExtArgs> = {}>(args?: Subset<T, Programme$thematic_areaArgs<ExtArgs>>): Prisma__ThematicAreaClient<$Result.GetResult<Prisma.$ThematicAreaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    country<T extends Programme$countryArgs<ExtArgs> = {}>(args?: Subset<T, Programme$countryArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Programme model
   */ 
  interface ProgrammeFieldRefs {
    readonly id: FieldRef<"Programme", 'Int'>
    readonly programme_type: FieldRef<"Programme", 'ProgrammeType'>
    readonly region_id: FieldRef<"Programme", 'Int'>
    readonly cover_image: FieldRef<"Programme", 'String'>
    readonly title: FieldRef<"Programme", 'String'>
    readonly description: FieldRef<"Programme", 'String'>
    readonly content: FieldRef<"Programme", 'String'>
    readonly created: FieldRef<"Programme", 'DateTime'>
    readonly authorId: FieldRef<"Programme", 'Int'>
    readonly thematicAreaId: FieldRef<"Programme", 'Int'>
    readonly countryId: FieldRef<"Programme", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Programme findUnique
   */
  export type ProgrammeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programme
     */
    select?: ProgrammeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgrammeInclude<ExtArgs> | null
    /**
     * Filter, which Programme to fetch.
     */
    where: ProgrammeWhereUniqueInput
  }


  /**
   * Programme findUniqueOrThrow
   */
  export type ProgrammeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programme
     */
    select?: ProgrammeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgrammeInclude<ExtArgs> | null
    /**
     * Filter, which Programme to fetch.
     */
    where: ProgrammeWhereUniqueInput
  }


  /**
   * Programme findFirst
   */
  export type ProgrammeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programme
     */
    select?: ProgrammeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgrammeInclude<ExtArgs> | null
    /**
     * Filter, which Programme to fetch.
     */
    where?: ProgrammeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programmes to fetch.
     */
    orderBy?: ProgrammeOrderByWithRelationInput | ProgrammeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programmes.
     */
    cursor?: ProgrammeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programmes.
     */
    distinct?: ProgrammeScalarFieldEnum | ProgrammeScalarFieldEnum[]
  }


  /**
   * Programme findFirstOrThrow
   */
  export type ProgrammeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programme
     */
    select?: ProgrammeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgrammeInclude<ExtArgs> | null
    /**
     * Filter, which Programme to fetch.
     */
    where?: ProgrammeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programmes to fetch.
     */
    orderBy?: ProgrammeOrderByWithRelationInput | ProgrammeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programmes.
     */
    cursor?: ProgrammeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programmes.
     */
    distinct?: ProgrammeScalarFieldEnum | ProgrammeScalarFieldEnum[]
  }


  /**
   * Programme findMany
   */
  export type ProgrammeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programme
     */
    select?: ProgrammeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgrammeInclude<ExtArgs> | null
    /**
     * Filter, which Programmes to fetch.
     */
    where?: ProgrammeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programmes to fetch.
     */
    orderBy?: ProgrammeOrderByWithRelationInput | ProgrammeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Programmes.
     */
    cursor?: ProgrammeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programmes.
     */
    skip?: number
    distinct?: ProgrammeScalarFieldEnum | ProgrammeScalarFieldEnum[]
  }


  /**
   * Programme create
   */
  export type ProgrammeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programme
     */
    select?: ProgrammeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgrammeInclude<ExtArgs> | null
    /**
     * The data needed to create a Programme.
     */
    data: XOR<ProgrammeCreateInput, ProgrammeUncheckedCreateInput>
  }


  /**
   * Programme createMany
   */
  export type ProgrammeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Programmes.
     */
    data: ProgrammeCreateManyInput | ProgrammeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Programme update
   */
  export type ProgrammeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programme
     */
    select?: ProgrammeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgrammeInclude<ExtArgs> | null
    /**
     * The data needed to update a Programme.
     */
    data: XOR<ProgrammeUpdateInput, ProgrammeUncheckedUpdateInput>
    /**
     * Choose, which Programme to update.
     */
    where: ProgrammeWhereUniqueInput
  }


  /**
   * Programme updateMany
   */
  export type ProgrammeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Programmes.
     */
    data: XOR<ProgrammeUpdateManyMutationInput, ProgrammeUncheckedUpdateManyInput>
    /**
     * Filter which Programmes to update
     */
    where?: ProgrammeWhereInput
  }


  /**
   * Programme upsert
   */
  export type ProgrammeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programme
     */
    select?: ProgrammeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgrammeInclude<ExtArgs> | null
    /**
     * The filter to search for the Programme to update in case it exists.
     */
    where: ProgrammeWhereUniqueInput
    /**
     * In case the Programme found by the `where` argument doesn't exist, create a new Programme with this data.
     */
    create: XOR<ProgrammeCreateInput, ProgrammeUncheckedCreateInput>
    /**
     * In case the Programme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgrammeUpdateInput, ProgrammeUncheckedUpdateInput>
  }


  /**
   * Programme delete
   */
  export type ProgrammeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programme
     */
    select?: ProgrammeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgrammeInclude<ExtArgs> | null
    /**
     * Filter which Programme to delete.
     */
    where: ProgrammeWhereUniqueInput
  }


  /**
   * Programme deleteMany
   */
  export type ProgrammeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Programmes to delete
     */
    where?: ProgrammeWhereInput
  }


  /**
   * Programme.thematic_area
   */
  export type Programme$thematic_areaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThematicArea
     */
    select?: ThematicAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThematicAreaInclude<ExtArgs> | null
    where?: ThematicAreaWhereInput
  }


  /**
   * Programme.country
   */
  export type Programme$countryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    where?: CountryWhereInput
  }


  /**
   * Programme without action
   */
  export type ProgrammeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programme
     */
    select?: ProgrammeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgrammeInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RegionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type RegionScalarFieldEnum = (typeof RegionScalarFieldEnum)[keyof typeof RegionScalarFieldEnum]


  export const CountryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    regionId: 'regionId'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const ThematicAreaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    descrviption: 'descrviption'
  };

  export type ThematicAreaScalarFieldEnum = (typeof ThematicAreaScalarFieldEnum)[keyof typeof ThematicAreaScalarFieldEnum]


  export const ProgrammeScalarFieldEnum: {
    id: 'id',
    programme_type: 'programme_type',
    region_id: 'region_id',
    cover_image: 'cover_image',
    title: 'title',
    description: 'description',
    content: 'content',
    created: 'created',
    authorId: 'authorId',
    thematicAreaId: 'thematicAreaId',
    countryId: 'countryId'
  };

  export type ProgrammeScalarFieldEnum = (typeof ProgrammeScalarFieldEnum)[keyof typeof ProgrammeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'ProgrammeType'
   */
  export type EnumProgrammeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgrammeType'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    Programme?: ProgrammeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    Programme?: ProgrammeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    Programme?: ProgrammeListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type RegionWhereInput = {
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    id?: IntFilter<"Region"> | number
    name?: StringFilter<"Region"> | string
    description?: StringFilter<"Region"> | string
    Country?: CountryListRelationFilter
  }

  export type RegionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    Country?: CountryOrderByRelationAggregateInput
  }

  export type RegionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    name?: StringFilter<"Region"> | string
    description?: StringFilter<"Region"> | string
    Country?: CountryListRelationFilter
  }, "id">

  export type RegionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: RegionCountOrderByAggregateInput
    _avg?: RegionAvgOrderByAggregateInput
    _max?: RegionMaxOrderByAggregateInput
    _min?: RegionMinOrderByAggregateInput
    _sum?: RegionSumOrderByAggregateInput
  }

  export type RegionScalarWhereWithAggregatesInput = {
    AND?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    OR?: RegionScalarWhereWithAggregatesInput[]
    NOT?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Region"> | number
    name?: StringWithAggregatesFilter<"Region"> | string
    description?: StringWithAggregatesFilter<"Region"> | string
  }

  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    id?: IntFilter<"Country"> | number
    name?: StringFilter<"Country"> | string
    description?: StringFilter<"Country"> | string
    regionId?: IntFilter<"Country"> | number
    region?: XOR<RegionRelationFilter, RegionWhereInput>
    Programme?: ProgrammeListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    regionId?: SortOrder
    region?: RegionOrderByWithRelationInput
    Programme?: ProgrammeOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    name?: StringFilter<"Country"> | string
    description?: StringFilter<"Country"> | string
    regionId?: IntFilter<"Country"> | number
    region?: XOR<RegionRelationFilter, RegionWhereInput>
    Programme?: ProgrammeListRelationFilter
  }, "id">

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    regionId?: SortOrder
    _count?: CountryCountOrderByAggregateInput
    _avg?: CountryAvgOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
    _sum?: CountrySumOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Country"> | number
    name?: StringWithAggregatesFilter<"Country"> | string
    description?: StringWithAggregatesFilter<"Country"> | string
    regionId?: IntWithAggregatesFilter<"Country"> | number
  }

  export type ThematicAreaWhereInput = {
    AND?: ThematicAreaWhereInput | ThematicAreaWhereInput[]
    OR?: ThematicAreaWhereInput[]
    NOT?: ThematicAreaWhereInput | ThematicAreaWhereInput[]
    id?: IntFilter<"ThematicArea"> | number
    name?: StringFilter<"ThematicArea"> | string
    descrviption?: StringFilter<"ThematicArea"> | string
    Programme?: ProgrammeListRelationFilter
  }

  export type ThematicAreaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    descrviption?: SortOrder
    Programme?: ProgrammeOrderByRelationAggregateInput
  }

  export type ThematicAreaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ThematicAreaWhereInput | ThematicAreaWhereInput[]
    OR?: ThematicAreaWhereInput[]
    NOT?: ThematicAreaWhereInput | ThematicAreaWhereInput[]
    name?: StringFilter<"ThematicArea"> | string
    descrviption?: StringFilter<"ThematicArea"> | string
    Programme?: ProgrammeListRelationFilter
  }, "id">

  export type ThematicAreaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    descrviption?: SortOrder
    _count?: ThematicAreaCountOrderByAggregateInput
    _avg?: ThematicAreaAvgOrderByAggregateInput
    _max?: ThematicAreaMaxOrderByAggregateInput
    _min?: ThematicAreaMinOrderByAggregateInput
    _sum?: ThematicAreaSumOrderByAggregateInput
  }

  export type ThematicAreaScalarWhereWithAggregatesInput = {
    AND?: ThematicAreaScalarWhereWithAggregatesInput | ThematicAreaScalarWhereWithAggregatesInput[]
    OR?: ThematicAreaScalarWhereWithAggregatesInput[]
    NOT?: ThematicAreaScalarWhereWithAggregatesInput | ThematicAreaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ThematicArea"> | number
    name?: StringWithAggregatesFilter<"ThematicArea"> | string
    descrviption?: StringWithAggregatesFilter<"ThematicArea"> | string
  }

  export type ProgrammeWhereInput = {
    AND?: ProgrammeWhereInput | ProgrammeWhereInput[]
    OR?: ProgrammeWhereInput[]
    NOT?: ProgrammeWhereInput | ProgrammeWhereInput[]
    id?: IntFilter<"Programme"> | number
    programme_type?: EnumProgrammeTypeFilter<"Programme"> | $Enums.ProgrammeType
    region_id?: IntFilter<"Programme"> | number
    cover_image?: StringFilter<"Programme"> | string
    title?: StringFilter<"Programme"> | string
    description?: StringFilter<"Programme"> | string
    content?: StringFilter<"Programme"> | string
    created?: DateTimeFilter<"Programme"> | Date | string
    authorId?: IntFilter<"Programme"> | number
    thematicAreaId?: IntNullableFilter<"Programme"> | number | null
    countryId?: IntNullableFilter<"Programme"> | number | null
    author?: XOR<UserRelationFilter, UserWhereInput>
    thematic_area?: XOR<ThematicAreaNullableRelationFilter, ThematicAreaWhereInput> | null
    country?: XOR<CountryNullableRelationFilter, CountryWhereInput> | null
  }

  export type ProgrammeOrderByWithRelationInput = {
    id?: SortOrder
    programme_type?: SortOrder
    region_id?: SortOrder
    cover_image?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    created?: SortOrder
    authorId?: SortOrder
    thematicAreaId?: SortOrderInput | SortOrder
    countryId?: SortOrderInput | SortOrder
    author?: UserOrderByWithRelationInput
    thematic_area?: ThematicAreaOrderByWithRelationInput
    country?: CountryOrderByWithRelationInput
  }

  export type ProgrammeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProgrammeWhereInput | ProgrammeWhereInput[]
    OR?: ProgrammeWhereInput[]
    NOT?: ProgrammeWhereInput | ProgrammeWhereInput[]
    programme_type?: EnumProgrammeTypeFilter<"Programme"> | $Enums.ProgrammeType
    region_id?: IntFilter<"Programme"> | number
    cover_image?: StringFilter<"Programme"> | string
    title?: StringFilter<"Programme"> | string
    description?: StringFilter<"Programme"> | string
    content?: StringFilter<"Programme"> | string
    created?: DateTimeFilter<"Programme"> | Date | string
    authorId?: IntFilter<"Programme"> | number
    thematicAreaId?: IntNullableFilter<"Programme"> | number | null
    countryId?: IntNullableFilter<"Programme"> | number | null
    author?: XOR<UserRelationFilter, UserWhereInput>
    thematic_area?: XOR<ThematicAreaNullableRelationFilter, ThematicAreaWhereInput> | null
    country?: XOR<CountryNullableRelationFilter, CountryWhereInput> | null
  }, "id">

  export type ProgrammeOrderByWithAggregationInput = {
    id?: SortOrder
    programme_type?: SortOrder
    region_id?: SortOrder
    cover_image?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    created?: SortOrder
    authorId?: SortOrder
    thematicAreaId?: SortOrderInput | SortOrder
    countryId?: SortOrderInput | SortOrder
    _count?: ProgrammeCountOrderByAggregateInput
    _avg?: ProgrammeAvgOrderByAggregateInput
    _max?: ProgrammeMaxOrderByAggregateInput
    _min?: ProgrammeMinOrderByAggregateInput
    _sum?: ProgrammeSumOrderByAggregateInput
  }

  export type ProgrammeScalarWhereWithAggregatesInput = {
    AND?: ProgrammeScalarWhereWithAggregatesInput | ProgrammeScalarWhereWithAggregatesInput[]
    OR?: ProgrammeScalarWhereWithAggregatesInput[]
    NOT?: ProgrammeScalarWhereWithAggregatesInput | ProgrammeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Programme"> | number
    programme_type?: EnumProgrammeTypeWithAggregatesFilter<"Programme"> | $Enums.ProgrammeType
    region_id?: IntWithAggregatesFilter<"Programme"> | number
    cover_image?: StringWithAggregatesFilter<"Programme"> | string
    title?: StringWithAggregatesFilter<"Programme"> | string
    description?: StringWithAggregatesFilter<"Programme"> | string
    content?: StringWithAggregatesFilter<"Programme"> | string
    created?: DateTimeWithAggregatesFilter<"Programme"> | Date | string
    authorId?: IntWithAggregatesFilter<"Programme"> | number
    thematicAreaId?: IntNullableWithAggregatesFilter<"Programme"> | number | null
    countryId?: IntNullableWithAggregatesFilter<"Programme"> | number | null
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    Programme?: ProgrammeCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    Programme?: ProgrammeUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Programme?: ProgrammeUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Programme?: ProgrammeUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type RegionCreateInput = {
    name: string
    description?: string
    Country?: CountryCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateInput = {
    id?: number
    name: string
    description?: string
    Country?: CountryUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    Country?: CountryUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    Country?: CountryUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type RegionCreateManyInput = {
    id?: number
    name: string
    description?: string
  }

  export type RegionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type RegionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CountryCreateInput = {
    name: string
    description?: string
    region: RegionCreateNestedOneWithoutCountryInput
    Programme?: ProgrammeCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id?: number
    name: string
    description?: string
    regionId: number
    Programme?: ProgrammeUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    region?: RegionUpdateOneRequiredWithoutCountryNestedInput
    Programme?: ProgrammeUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    regionId?: IntFieldUpdateOperationsInput | number
    Programme?: ProgrammeUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    id?: number
    name: string
    description?: string
    regionId: number
  }

  export type CountryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    regionId?: IntFieldUpdateOperationsInput | number
  }

  export type ThematicAreaCreateInput = {
    name: string
    descrviption?: string
    Programme?: ProgrammeCreateNestedManyWithoutThematic_areaInput
  }

  export type ThematicAreaUncheckedCreateInput = {
    id?: number
    name: string
    descrviption?: string
    Programme?: ProgrammeUncheckedCreateNestedManyWithoutThematic_areaInput
  }

  export type ThematicAreaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    descrviption?: StringFieldUpdateOperationsInput | string
    Programme?: ProgrammeUpdateManyWithoutThematic_areaNestedInput
  }

  export type ThematicAreaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    descrviption?: StringFieldUpdateOperationsInput | string
    Programme?: ProgrammeUncheckedUpdateManyWithoutThematic_areaNestedInput
  }

  export type ThematicAreaCreateManyInput = {
    id?: number
    name: string
    descrviption?: string
  }

  export type ThematicAreaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    descrviption?: StringFieldUpdateOperationsInput | string
  }

  export type ThematicAreaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    descrviption?: StringFieldUpdateOperationsInput | string
  }

  export type ProgrammeCreateInput = {
    programme_type: $Enums.ProgrammeType
    region_id: number
    cover_image: string
    title: string
    description: string
    content: string
    created?: Date | string
    author: UserCreateNestedOneWithoutProgrammeInput
    thematic_area?: ThematicAreaCreateNestedOneWithoutProgrammeInput
    country?: CountryCreateNestedOneWithoutProgrammeInput
  }

  export type ProgrammeUncheckedCreateInput = {
    id?: number
    programme_type: $Enums.ProgrammeType
    region_id: number
    cover_image: string
    title: string
    description: string
    content: string
    created?: Date | string
    authorId: number
    thematicAreaId?: number | null
    countryId?: number | null
  }

  export type ProgrammeUpdateInput = {
    programme_type?: EnumProgrammeTypeFieldUpdateOperationsInput | $Enums.ProgrammeType
    region_id?: IntFieldUpdateOperationsInput | number
    cover_image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutProgrammeNestedInput
    thematic_area?: ThematicAreaUpdateOneWithoutProgrammeNestedInput
    country?: CountryUpdateOneWithoutProgrammeNestedInput
  }

  export type ProgrammeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    programme_type?: EnumProgrammeTypeFieldUpdateOperationsInput | $Enums.ProgrammeType
    region_id?: IntFieldUpdateOperationsInput | number
    cover_image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    thematicAreaId?: NullableIntFieldUpdateOperationsInput | number | null
    countryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProgrammeCreateManyInput = {
    id?: number
    programme_type: $Enums.ProgrammeType
    region_id: number
    cover_image: string
    title: string
    description: string
    content: string
    created?: Date | string
    authorId: number
    thematicAreaId?: number | null
    countryId?: number | null
  }

  export type ProgrammeUpdateManyMutationInput = {
    programme_type?: EnumProgrammeTypeFieldUpdateOperationsInput | $Enums.ProgrammeType
    region_id?: IntFieldUpdateOperationsInput | number
    cover_image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgrammeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    programme_type?: EnumProgrammeTypeFieldUpdateOperationsInput | $Enums.ProgrammeType
    region_id?: IntFieldUpdateOperationsInput | number
    cover_image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    thematicAreaId?: NullableIntFieldUpdateOperationsInput | number | null
    countryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProgrammeListRelationFilter = {
    every?: ProgrammeWhereInput
    some?: ProgrammeWhereInput
    none?: ProgrammeWhereInput
  }

  export type ProgrammeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type CountryListRelationFilter = {
    every?: CountryWhereInput
    some?: CountryWhereInput
    none?: CountryWhereInput
  }

  export type CountryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type RegionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RegionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type RegionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type RegionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RegionRelationFilter = {
    is?: RegionWhereInput
    isNot?: RegionWhereInput
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    regionId?: SortOrder
  }

  export type CountryAvgOrderByAggregateInput = {
    id?: SortOrder
    regionId?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    regionId?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    regionId?: SortOrder
  }

  export type CountrySumOrderByAggregateInput = {
    id?: SortOrder
    regionId?: SortOrder
  }

  export type ThematicAreaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    descrviption?: SortOrder
  }

  export type ThematicAreaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ThematicAreaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    descrviption?: SortOrder
  }

  export type ThematicAreaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    descrviption?: SortOrder
  }

  export type ThematicAreaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumProgrammeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgrammeType | EnumProgrammeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProgrammeType[]
    notIn?: $Enums.ProgrammeType[]
    not?: NestedEnumProgrammeTypeFilter<$PrismaModel> | $Enums.ProgrammeType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ThematicAreaNullableRelationFilter = {
    is?: ThematicAreaWhereInput | null
    isNot?: ThematicAreaWhereInput | null
  }

  export type CountryNullableRelationFilter = {
    is?: CountryWhereInput | null
    isNot?: CountryWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProgrammeCountOrderByAggregateInput = {
    id?: SortOrder
    programme_type?: SortOrder
    region_id?: SortOrder
    cover_image?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    created?: SortOrder
    authorId?: SortOrder
    thematicAreaId?: SortOrder
    countryId?: SortOrder
  }

  export type ProgrammeAvgOrderByAggregateInput = {
    id?: SortOrder
    region_id?: SortOrder
    authorId?: SortOrder
    thematicAreaId?: SortOrder
    countryId?: SortOrder
  }

  export type ProgrammeMaxOrderByAggregateInput = {
    id?: SortOrder
    programme_type?: SortOrder
    region_id?: SortOrder
    cover_image?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    created?: SortOrder
    authorId?: SortOrder
    thematicAreaId?: SortOrder
    countryId?: SortOrder
  }

  export type ProgrammeMinOrderByAggregateInput = {
    id?: SortOrder
    programme_type?: SortOrder
    region_id?: SortOrder
    cover_image?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    created?: SortOrder
    authorId?: SortOrder
    thematicAreaId?: SortOrder
    countryId?: SortOrder
  }

  export type ProgrammeSumOrderByAggregateInput = {
    id?: SortOrder
    region_id?: SortOrder
    authorId?: SortOrder
    thematicAreaId?: SortOrder
    countryId?: SortOrder
  }

  export type EnumProgrammeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgrammeType | EnumProgrammeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProgrammeType[]
    notIn?: $Enums.ProgrammeType[]
    not?: NestedEnumProgrammeTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProgrammeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgrammeTypeFilter<$PrismaModel>
    _max?: NestedEnumProgrammeTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProgrammeCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ProgrammeCreateWithoutAuthorInput, ProgrammeUncheckedCreateWithoutAuthorInput> | ProgrammeCreateWithoutAuthorInput[] | ProgrammeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ProgrammeCreateOrConnectWithoutAuthorInput | ProgrammeCreateOrConnectWithoutAuthorInput[]
    createMany?: ProgrammeCreateManyAuthorInputEnvelope
    connect?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
  }

  export type ProgrammeUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ProgrammeCreateWithoutAuthorInput, ProgrammeUncheckedCreateWithoutAuthorInput> | ProgrammeCreateWithoutAuthorInput[] | ProgrammeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ProgrammeCreateOrConnectWithoutAuthorInput | ProgrammeCreateOrConnectWithoutAuthorInput[]
    createMany?: ProgrammeCreateManyAuthorInputEnvelope
    connect?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProgrammeUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ProgrammeCreateWithoutAuthorInput, ProgrammeUncheckedCreateWithoutAuthorInput> | ProgrammeCreateWithoutAuthorInput[] | ProgrammeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ProgrammeCreateOrConnectWithoutAuthorInput | ProgrammeCreateOrConnectWithoutAuthorInput[]
    upsert?: ProgrammeUpsertWithWhereUniqueWithoutAuthorInput | ProgrammeUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ProgrammeCreateManyAuthorInputEnvelope
    set?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    disconnect?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    delete?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    connect?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    update?: ProgrammeUpdateWithWhereUniqueWithoutAuthorInput | ProgrammeUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ProgrammeUpdateManyWithWhereWithoutAuthorInput | ProgrammeUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ProgrammeScalarWhereInput | ProgrammeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProgrammeUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ProgrammeCreateWithoutAuthorInput, ProgrammeUncheckedCreateWithoutAuthorInput> | ProgrammeCreateWithoutAuthorInput[] | ProgrammeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ProgrammeCreateOrConnectWithoutAuthorInput | ProgrammeCreateOrConnectWithoutAuthorInput[]
    upsert?: ProgrammeUpsertWithWhereUniqueWithoutAuthorInput | ProgrammeUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ProgrammeCreateManyAuthorInputEnvelope
    set?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    disconnect?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    delete?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    connect?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    update?: ProgrammeUpdateWithWhereUniqueWithoutAuthorInput | ProgrammeUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ProgrammeUpdateManyWithWhereWithoutAuthorInput | ProgrammeUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ProgrammeScalarWhereInput | ProgrammeScalarWhereInput[]
  }

  export type CountryCreateNestedManyWithoutRegionInput = {
    create?: XOR<CountryCreateWithoutRegionInput, CountryUncheckedCreateWithoutRegionInput> | CountryCreateWithoutRegionInput[] | CountryUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutRegionInput | CountryCreateOrConnectWithoutRegionInput[]
    createMany?: CountryCreateManyRegionInputEnvelope
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
  }

  export type CountryUncheckedCreateNestedManyWithoutRegionInput = {
    create?: XOR<CountryCreateWithoutRegionInput, CountryUncheckedCreateWithoutRegionInput> | CountryCreateWithoutRegionInput[] | CountryUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutRegionInput | CountryCreateOrConnectWithoutRegionInput[]
    createMany?: CountryCreateManyRegionInputEnvelope
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
  }

  export type CountryUpdateManyWithoutRegionNestedInput = {
    create?: XOR<CountryCreateWithoutRegionInput, CountryUncheckedCreateWithoutRegionInput> | CountryCreateWithoutRegionInput[] | CountryUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutRegionInput | CountryCreateOrConnectWithoutRegionInput[]
    upsert?: CountryUpsertWithWhereUniqueWithoutRegionInput | CountryUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: CountryCreateManyRegionInputEnvelope
    set?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    disconnect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    delete?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    update?: CountryUpdateWithWhereUniqueWithoutRegionInput | CountryUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: CountryUpdateManyWithWhereWithoutRegionInput | CountryUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: CountryScalarWhereInput | CountryScalarWhereInput[]
  }

  export type CountryUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: XOR<CountryCreateWithoutRegionInput, CountryUncheckedCreateWithoutRegionInput> | CountryCreateWithoutRegionInput[] | CountryUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutRegionInput | CountryCreateOrConnectWithoutRegionInput[]
    upsert?: CountryUpsertWithWhereUniqueWithoutRegionInput | CountryUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: CountryCreateManyRegionInputEnvelope
    set?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    disconnect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    delete?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    update?: CountryUpdateWithWhereUniqueWithoutRegionInput | CountryUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: CountryUpdateManyWithWhereWithoutRegionInput | CountryUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: CountryScalarWhereInput | CountryScalarWhereInput[]
  }

  export type RegionCreateNestedOneWithoutCountryInput = {
    create?: XOR<RegionCreateWithoutCountryInput, RegionUncheckedCreateWithoutCountryInput>
    connectOrCreate?: RegionCreateOrConnectWithoutCountryInput
    connect?: RegionWhereUniqueInput
  }

  export type ProgrammeCreateNestedManyWithoutCountryInput = {
    create?: XOR<ProgrammeCreateWithoutCountryInput, ProgrammeUncheckedCreateWithoutCountryInput> | ProgrammeCreateWithoutCountryInput[] | ProgrammeUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ProgrammeCreateOrConnectWithoutCountryInput | ProgrammeCreateOrConnectWithoutCountryInput[]
    createMany?: ProgrammeCreateManyCountryInputEnvelope
    connect?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
  }

  export type ProgrammeUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<ProgrammeCreateWithoutCountryInput, ProgrammeUncheckedCreateWithoutCountryInput> | ProgrammeCreateWithoutCountryInput[] | ProgrammeUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ProgrammeCreateOrConnectWithoutCountryInput | ProgrammeCreateOrConnectWithoutCountryInput[]
    createMany?: ProgrammeCreateManyCountryInputEnvelope
    connect?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
  }

  export type RegionUpdateOneRequiredWithoutCountryNestedInput = {
    create?: XOR<RegionCreateWithoutCountryInput, RegionUncheckedCreateWithoutCountryInput>
    connectOrCreate?: RegionCreateOrConnectWithoutCountryInput
    upsert?: RegionUpsertWithoutCountryInput
    connect?: RegionWhereUniqueInput
    update?: XOR<XOR<RegionUpdateToOneWithWhereWithoutCountryInput, RegionUpdateWithoutCountryInput>, RegionUncheckedUpdateWithoutCountryInput>
  }

  export type ProgrammeUpdateManyWithoutCountryNestedInput = {
    create?: XOR<ProgrammeCreateWithoutCountryInput, ProgrammeUncheckedCreateWithoutCountryInput> | ProgrammeCreateWithoutCountryInput[] | ProgrammeUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ProgrammeCreateOrConnectWithoutCountryInput | ProgrammeCreateOrConnectWithoutCountryInput[]
    upsert?: ProgrammeUpsertWithWhereUniqueWithoutCountryInput | ProgrammeUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: ProgrammeCreateManyCountryInputEnvelope
    set?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    disconnect?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    delete?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    connect?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    update?: ProgrammeUpdateWithWhereUniqueWithoutCountryInput | ProgrammeUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: ProgrammeUpdateManyWithWhereWithoutCountryInput | ProgrammeUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: ProgrammeScalarWhereInput | ProgrammeScalarWhereInput[]
  }

  export type ProgrammeUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<ProgrammeCreateWithoutCountryInput, ProgrammeUncheckedCreateWithoutCountryInput> | ProgrammeCreateWithoutCountryInput[] | ProgrammeUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ProgrammeCreateOrConnectWithoutCountryInput | ProgrammeCreateOrConnectWithoutCountryInput[]
    upsert?: ProgrammeUpsertWithWhereUniqueWithoutCountryInput | ProgrammeUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: ProgrammeCreateManyCountryInputEnvelope
    set?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    disconnect?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    delete?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    connect?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    update?: ProgrammeUpdateWithWhereUniqueWithoutCountryInput | ProgrammeUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: ProgrammeUpdateManyWithWhereWithoutCountryInput | ProgrammeUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: ProgrammeScalarWhereInput | ProgrammeScalarWhereInput[]
  }

  export type ProgrammeCreateNestedManyWithoutThematic_areaInput = {
    create?: XOR<ProgrammeCreateWithoutThematic_areaInput, ProgrammeUncheckedCreateWithoutThematic_areaInput> | ProgrammeCreateWithoutThematic_areaInput[] | ProgrammeUncheckedCreateWithoutThematic_areaInput[]
    connectOrCreate?: ProgrammeCreateOrConnectWithoutThematic_areaInput | ProgrammeCreateOrConnectWithoutThematic_areaInput[]
    createMany?: ProgrammeCreateManyThematic_areaInputEnvelope
    connect?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
  }

  export type ProgrammeUncheckedCreateNestedManyWithoutThematic_areaInput = {
    create?: XOR<ProgrammeCreateWithoutThematic_areaInput, ProgrammeUncheckedCreateWithoutThematic_areaInput> | ProgrammeCreateWithoutThematic_areaInput[] | ProgrammeUncheckedCreateWithoutThematic_areaInput[]
    connectOrCreate?: ProgrammeCreateOrConnectWithoutThematic_areaInput | ProgrammeCreateOrConnectWithoutThematic_areaInput[]
    createMany?: ProgrammeCreateManyThematic_areaInputEnvelope
    connect?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
  }

  export type ProgrammeUpdateManyWithoutThematic_areaNestedInput = {
    create?: XOR<ProgrammeCreateWithoutThematic_areaInput, ProgrammeUncheckedCreateWithoutThematic_areaInput> | ProgrammeCreateWithoutThematic_areaInput[] | ProgrammeUncheckedCreateWithoutThematic_areaInput[]
    connectOrCreate?: ProgrammeCreateOrConnectWithoutThematic_areaInput | ProgrammeCreateOrConnectWithoutThematic_areaInput[]
    upsert?: ProgrammeUpsertWithWhereUniqueWithoutThematic_areaInput | ProgrammeUpsertWithWhereUniqueWithoutThematic_areaInput[]
    createMany?: ProgrammeCreateManyThematic_areaInputEnvelope
    set?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    disconnect?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    delete?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    connect?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    update?: ProgrammeUpdateWithWhereUniqueWithoutThematic_areaInput | ProgrammeUpdateWithWhereUniqueWithoutThematic_areaInput[]
    updateMany?: ProgrammeUpdateManyWithWhereWithoutThematic_areaInput | ProgrammeUpdateManyWithWhereWithoutThematic_areaInput[]
    deleteMany?: ProgrammeScalarWhereInput | ProgrammeScalarWhereInput[]
  }

  export type ProgrammeUncheckedUpdateManyWithoutThematic_areaNestedInput = {
    create?: XOR<ProgrammeCreateWithoutThematic_areaInput, ProgrammeUncheckedCreateWithoutThematic_areaInput> | ProgrammeCreateWithoutThematic_areaInput[] | ProgrammeUncheckedCreateWithoutThematic_areaInput[]
    connectOrCreate?: ProgrammeCreateOrConnectWithoutThematic_areaInput | ProgrammeCreateOrConnectWithoutThematic_areaInput[]
    upsert?: ProgrammeUpsertWithWhereUniqueWithoutThematic_areaInput | ProgrammeUpsertWithWhereUniqueWithoutThematic_areaInput[]
    createMany?: ProgrammeCreateManyThematic_areaInputEnvelope
    set?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    disconnect?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    delete?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    connect?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    update?: ProgrammeUpdateWithWhereUniqueWithoutThematic_areaInput | ProgrammeUpdateWithWhereUniqueWithoutThematic_areaInput[]
    updateMany?: ProgrammeUpdateManyWithWhereWithoutThematic_areaInput | ProgrammeUpdateManyWithWhereWithoutThematic_areaInput[]
    deleteMany?: ProgrammeScalarWhereInput | ProgrammeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProgrammeInput = {
    create?: XOR<UserCreateWithoutProgrammeInput, UserUncheckedCreateWithoutProgrammeInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgrammeInput
    connect?: UserWhereUniqueInput
  }

  export type ThematicAreaCreateNestedOneWithoutProgrammeInput = {
    create?: XOR<ThematicAreaCreateWithoutProgrammeInput, ThematicAreaUncheckedCreateWithoutProgrammeInput>
    connectOrCreate?: ThematicAreaCreateOrConnectWithoutProgrammeInput
    connect?: ThematicAreaWhereUniqueInput
  }

  export type CountryCreateNestedOneWithoutProgrammeInput = {
    create?: XOR<CountryCreateWithoutProgrammeInput, CountryUncheckedCreateWithoutProgrammeInput>
    connectOrCreate?: CountryCreateOrConnectWithoutProgrammeInput
    connect?: CountryWhereUniqueInput
  }

  export type EnumProgrammeTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProgrammeType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutProgrammeNestedInput = {
    create?: XOR<UserCreateWithoutProgrammeInput, UserUncheckedCreateWithoutProgrammeInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgrammeInput
    upsert?: UserUpsertWithoutProgrammeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProgrammeInput, UserUpdateWithoutProgrammeInput>, UserUncheckedUpdateWithoutProgrammeInput>
  }

  export type ThematicAreaUpdateOneWithoutProgrammeNestedInput = {
    create?: XOR<ThematicAreaCreateWithoutProgrammeInput, ThematicAreaUncheckedCreateWithoutProgrammeInput>
    connectOrCreate?: ThematicAreaCreateOrConnectWithoutProgrammeInput
    upsert?: ThematicAreaUpsertWithoutProgrammeInput
    disconnect?: ThematicAreaWhereInput | boolean
    delete?: ThematicAreaWhereInput | boolean
    connect?: ThematicAreaWhereUniqueInput
    update?: XOR<XOR<ThematicAreaUpdateToOneWithWhereWithoutProgrammeInput, ThematicAreaUpdateWithoutProgrammeInput>, ThematicAreaUncheckedUpdateWithoutProgrammeInput>
  }

  export type CountryUpdateOneWithoutProgrammeNestedInput = {
    create?: XOR<CountryCreateWithoutProgrammeInput, CountryUncheckedCreateWithoutProgrammeInput>
    connectOrCreate?: CountryCreateOrConnectWithoutProgrammeInput
    upsert?: CountryUpsertWithoutProgrammeInput
    disconnect?: CountryWhereInput | boolean
    delete?: CountryWhereInput | boolean
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutProgrammeInput, CountryUpdateWithoutProgrammeInput>, CountryUncheckedUpdateWithoutProgrammeInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumProgrammeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgrammeType | EnumProgrammeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProgrammeType[]
    notIn?: $Enums.ProgrammeType[]
    not?: NestedEnumProgrammeTypeFilter<$PrismaModel> | $Enums.ProgrammeType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumProgrammeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgrammeType | EnumProgrammeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProgrammeType[]
    notIn?: $Enums.ProgrammeType[]
    not?: NestedEnumProgrammeTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProgrammeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgrammeTypeFilter<$PrismaModel>
    _max?: NestedEnumProgrammeTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ProgrammeCreateWithoutAuthorInput = {
    programme_type: $Enums.ProgrammeType
    region_id: number
    cover_image: string
    title: string
    description: string
    content: string
    created?: Date | string
    thematic_area?: ThematicAreaCreateNestedOneWithoutProgrammeInput
    country?: CountryCreateNestedOneWithoutProgrammeInput
  }

  export type ProgrammeUncheckedCreateWithoutAuthorInput = {
    id?: number
    programme_type: $Enums.ProgrammeType
    region_id: number
    cover_image: string
    title: string
    description: string
    content: string
    created?: Date | string
    thematicAreaId?: number | null
    countryId?: number | null
  }

  export type ProgrammeCreateOrConnectWithoutAuthorInput = {
    where: ProgrammeWhereUniqueInput
    create: XOR<ProgrammeCreateWithoutAuthorInput, ProgrammeUncheckedCreateWithoutAuthorInput>
  }

  export type ProgrammeCreateManyAuthorInputEnvelope = {
    data: ProgrammeCreateManyAuthorInput | ProgrammeCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ProgrammeUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ProgrammeWhereUniqueInput
    update: XOR<ProgrammeUpdateWithoutAuthorInput, ProgrammeUncheckedUpdateWithoutAuthorInput>
    create: XOR<ProgrammeCreateWithoutAuthorInput, ProgrammeUncheckedCreateWithoutAuthorInput>
  }

  export type ProgrammeUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ProgrammeWhereUniqueInput
    data: XOR<ProgrammeUpdateWithoutAuthorInput, ProgrammeUncheckedUpdateWithoutAuthorInput>
  }

  export type ProgrammeUpdateManyWithWhereWithoutAuthorInput = {
    where: ProgrammeScalarWhereInput
    data: XOR<ProgrammeUpdateManyMutationInput, ProgrammeUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ProgrammeScalarWhereInput = {
    AND?: ProgrammeScalarWhereInput | ProgrammeScalarWhereInput[]
    OR?: ProgrammeScalarWhereInput[]
    NOT?: ProgrammeScalarWhereInput | ProgrammeScalarWhereInput[]
    id?: IntFilter<"Programme"> | number
    programme_type?: EnumProgrammeTypeFilter<"Programme"> | $Enums.ProgrammeType
    region_id?: IntFilter<"Programme"> | number
    cover_image?: StringFilter<"Programme"> | string
    title?: StringFilter<"Programme"> | string
    description?: StringFilter<"Programme"> | string
    content?: StringFilter<"Programme"> | string
    created?: DateTimeFilter<"Programme"> | Date | string
    authorId?: IntFilter<"Programme"> | number
    thematicAreaId?: IntNullableFilter<"Programme"> | number | null
    countryId?: IntNullableFilter<"Programme"> | number | null
  }

  export type CountryCreateWithoutRegionInput = {
    name: string
    description?: string
    Programme?: ProgrammeCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutRegionInput = {
    id?: number
    name: string
    description?: string
    Programme?: ProgrammeUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutRegionInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutRegionInput, CountryUncheckedCreateWithoutRegionInput>
  }

  export type CountryCreateManyRegionInputEnvelope = {
    data: CountryCreateManyRegionInput | CountryCreateManyRegionInput[]
    skipDuplicates?: boolean
  }

  export type CountryUpsertWithWhereUniqueWithoutRegionInput = {
    where: CountryWhereUniqueInput
    update: XOR<CountryUpdateWithoutRegionInput, CountryUncheckedUpdateWithoutRegionInput>
    create: XOR<CountryCreateWithoutRegionInput, CountryUncheckedCreateWithoutRegionInput>
  }

  export type CountryUpdateWithWhereUniqueWithoutRegionInput = {
    where: CountryWhereUniqueInput
    data: XOR<CountryUpdateWithoutRegionInput, CountryUncheckedUpdateWithoutRegionInput>
  }

  export type CountryUpdateManyWithWhereWithoutRegionInput = {
    where: CountryScalarWhereInput
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyWithoutRegionInput>
  }

  export type CountryScalarWhereInput = {
    AND?: CountryScalarWhereInput | CountryScalarWhereInput[]
    OR?: CountryScalarWhereInput[]
    NOT?: CountryScalarWhereInput | CountryScalarWhereInput[]
    id?: IntFilter<"Country"> | number
    name?: StringFilter<"Country"> | string
    description?: StringFilter<"Country"> | string
    regionId?: IntFilter<"Country"> | number
  }

  export type RegionCreateWithoutCountryInput = {
    name: string
    description?: string
  }

  export type RegionUncheckedCreateWithoutCountryInput = {
    id?: number
    name: string
    description?: string
  }

  export type RegionCreateOrConnectWithoutCountryInput = {
    where: RegionWhereUniqueInput
    create: XOR<RegionCreateWithoutCountryInput, RegionUncheckedCreateWithoutCountryInput>
  }

  export type ProgrammeCreateWithoutCountryInput = {
    programme_type: $Enums.ProgrammeType
    region_id: number
    cover_image: string
    title: string
    description: string
    content: string
    created?: Date | string
    author: UserCreateNestedOneWithoutProgrammeInput
    thematic_area?: ThematicAreaCreateNestedOneWithoutProgrammeInput
  }

  export type ProgrammeUncheckedCreateWithoutCountryInput = {
    id?: number
    programme_type: $Enums.ProgrammeType
    region_id: number
    cover_image: string
    title: string
    description: string
    content: string
    created?: Date | string
    authorId: number
    thematicAreaId?: number | null
  }

  export type ProgrammeCreateOrConnectWithoutCountryInput = {
    where: ProgrammeWhereUniqueInput
    create: XOR<ProgrammeCreateWithoutCountryInput, ProgrammeUncheckedCreateWithoutCountryInput>
  }

  export type ProgrammeCreateManyCountryInputEnvelope = {
    data: ProgrammeCreateManyCountryInput | ProgrammeCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type RegionUpsertWithoutCountryInput = {
    update: XOR<RegionUpdateWithoutCountryInput, RegionUncheckedUpdateWithoutCountryInput>
    create: XOR<RegionCreateWithoutCountryInput, RegionUncheckedCreateWithoutCountryInput>
    where?: RegionWhereInput
  }

  export type RegionUpdateToOneWithWhereWithoutCountryInput = {
    where?: RegionWhereInput
    data: XOR<RegionUpdateWithoutCountryInput, RegionUncheckedUpdateWithoutCountryInput>
  }

  export type RegionUpdateWithoutCountryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type RegionUncheckedUpdateWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ProgrammeUpsertWithWhereUniqueWithoutCountryInput = {
    where: ProgrammeWhereUniqueInput
    update: XOR<ProgrammeUpdateWithoutCountryInput, ProgrammeUncheckedUpdateWithoutCountryInput>
    create: XOR<ProgrammeCreateWithoutCountryInput, ProgrammeUncheckedCreateWithoutCountryInput>
  }

  export type ProgrammeUpdateWithWhereUniqueWithoutCountryInput = {
    where: ProgrammeWhereUniqueInput
    data: XOR<ProgrammeUpdateWithoutCountryInput, ProgrammeUncheckedUpdateWithoutCountryInput>
  }

  export type ProgrammeUpdateManyWithWhereWithoutCountryInput = {
    where: ProgrammeScalarWhereInput
    data: XOR<ProgrammeUpdateManyMutationInput, ProgrammeUncheckedUpdateManyWithoutCountryInput>
  }

  export type ProgrammeCreateWithoutThematic_areaInput = {
    programme_type: $Enums.ProgrammeType
    region_id: number
    cover_image: string
    title: string
    description: string
    content: string
    created?: Date | string
    author: UserCreateNestedOneWithoutProgrammeInput
    country?: CountryCreateNestedOneWithoutProgrammeInput
  }

  export type ProgrammeUncheckedCreateWithoutThematic_areaInput = {
    id?: number
    programme_type: $Enums.ProgrammeType
    region_id: number
    cover_image: string
    title: string
    description: string
    content: string
    created?: Date | string
    authorId: number
    countryId?: number | null
  }

  export type ProgrammeCreateOrConnectWithoutThematic_areaInput = {
    where: ProgrammeWhereUniqueInput
    create: XOR<ProgrammeCreateWithoutThematic_areaInput, ProgrammeUncheckedCreateWithoutThematic_areaInput>
  }

  export type ProgrammeCreateManyThematic_areaInputEnvelope = {
    data: ProgrammeCreateManyThematic_areaInput | ProgrammeCreateManyThematic_areaInput[]
    skipDuplicates?: boolean
  }

  export type ProgrammeUpsertWithWhereUniqueWithoutThematic_areaInput = {
    where: ProgrammeWhereUniqueInput
    update: XOR<ProgrammeUpdateWithoutThematic_areaInput, ProgrammeUncheckedUpdateWithoutThematic_areaInput>
    create: XOR<ProgrammeCreateWithoutThematic_areaInput, ProgrammeUncheckedCreateWithoutThematic_areaInput>
  }

  export type ProgrammeUpdateWithWhereUniqueWithoutThematic_areaInput = {
    where: ProgrammeWhereUniqueInput
    data: XOR<ProgrammeUpdateWithoutThematic_areaInput, ProgrammeUncheckedUpdateWithoutThematic_areaInput>
  }

  export type ProgrammeUpdateManyWithWhereWithoutThematic_areaInput = {
    where: ProgrammeScalarWhereInput
    data: XOR<ProgrammeUpdateManyMutationInput, ProgrammeUncheckedUpdateManyWithoutThematic_areaInput>
  }

  export type UserCreateWithoutProgrammeInput = {
    username: string
    email: string
    password: string
  }

  export type UserUncheckedCreateWithoutProgrammeInput = {
    id?: number
    username: string
    email: string
    password: string
  }

  export type UserCreateOrConnectWithoutProgrammeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgrammeInput, UserUncheckedCreateWithoutProgrammeInput>
  }

  export type ThematicAreaCreateWithoutProgrammeInput = {
    name: string
    descrviption?: string
  }

  export type ThematicAreaUncheckedCreateWithoutProgrammeInput = {
    id?: number
    name: string
    descrviption?: string
  }

  export type ThematicAreaCreateOrConnectWithoutProgrammeInput = {
    where: ThematicAreaWhereUniqueInput
    create: XOR<ThematicAreaCreateWithoutProgrammeInput, ThematicAreaUncheckedCreateWithoutProgrammeInput>
  }

  export type CountryCreateWithoutProgrammeInput = {
    name: string
    description?: string
    region: RegionCreateNestedOneWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutProgrammeInput = {
    id?: number
    name: string
    description?: string
    regionId: number
  }

  export type CountryCreateOrConnectWithoutProgrammeInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutProgrammeInput, CountryUncheckedCreateWithoutProgrammeInput>
  }

  export type UserUpsertWithoutProgrammeInput = {
    update: XOR<UserUpdateWithoutProgrammeInput, UserUncheckedUpdateWithoutProgrammeInput>
    create: XOR<UserCreateWithoutProgrammeInput, UserUncheckedCreateWithoutProgrammeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProgrammeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProgrammeInput, UserUncheckedUpdateWithoutProgrammeInput>
  }

  export type UserUpdateWithoutProgrammeInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutProgrammeInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ThematicAreaUpsertWithoutProgrammeInput = {
    update: XOR<ThematicAreaUpdateWithoutProgrammeInput, ThematicAreaUncheckedUpdateWithoutProgrammeInput>
    create: XOR<ThematicAreaCreateWithoutProgrammeInput, ThematicAreaUncheckedCreateWithoutProgrammeInput>
    where?: ThematicAreaWhereInput
  }

  export type ThematicAreaUpdateToOneWithWhereWithoutProgrammeInput = {
    where?: ThematicAreaWhereInput
    data: XOR<ThematicAreaUpdateWithoutProgrammeInput, ThematicAreaUncheckedUpdateWithoutProgrammeInput>
  }

  export type ThematicAreaUpdateWithoutProgrammeInput = {
    name?: StringFieldUpdateOperationsInput | string
    descrviption?: StringFieldUpdateOperationsInput | string
  }

  export type ThematicAreaUncheckedUpdateWithoutProgrammeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    descrviption?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUpsertWithoutProgrammeInput = {
    update: XOR<CountryUpdateWithoutProgrammeInput, CountryUncheckedUpdateWithoutProgrammeInput>
    create: XOR<CountryCreateWithoutProgrammeInput, CountryUncheckedCreateWithoutProgrammeInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutProgrammeInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutProgrammeInput, CountryUncheckedUpdateWithoutProgrammeInput>
  }

  export type CountryUpdateWithoutProgrammeInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    region?: RegionUpdateOneRequiredWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutProgrammeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    regionId?: IntFieldUpdateOperationsInput | number
  }

  export type ProgrammeCreateManyAuthorInput = {
    id?: number
    programme_type: $Enums.ProgrammeType
    region_id: number
    cover_image: string
    title: string
    description: string
    content: string
    created?: Date | string
    thematicAreaId?: number | null
    countryId?: number | null
  }

  export type ProgrammeUpdateWithoutAuthorInput = {
    programme_type?: EnumProgrammeTypeFieldUpdateOperationsInput | $Enums.ProgrammeType
    region_id?: IntFieldUpdateOperationsInput | number
    cover_image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    thematic_area?: ThematicAreaUpdateOneWithoutProgrammeNestedInput
    country?: CountryUpdateOneWithoutProgrammeNestedInput
  }

  export type ProgrammeUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    programme_type?: EnumProgrammeTypeFieldUpdateOperationsInput | $Enums.ProgrammeType
    region_id?: IntFieldUpdateOperationsInput | number
    cover_image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    thematicAreaId?: NullableIntFieldUpdateOperationsInput | number | null
    countryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProgrammeUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    programme_type?: EnumProgrammeTypeFieldUpdateOperationsInput | $Enums.ProgrammeType
    region_id?: IntFieldUpdateOperationsInput | number
    cover_image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    thematicAreaId?: NullableIntFieldUpdateOperationsInput | number | null
    countryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CountryCreateManyRegionInput = {
    id?: number
    name: string
    description?: string
  }

  export type CountryUpdateWithoutRegionInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    Programme?: ProgrammeUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutRegionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    Programme?: ProgrammeUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateManyWithoutRegionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ProgrammeCreateManyCountryInput = {
    id?: number
    programme_type: $Enums.ProgrammeType
    region_id: number
    cover_image: string
    title: string
    description: string
    content: string
    created?: Date | string
    authorId: number
    thematicAreaId?: number | null
  }

  export type ProgrammeUpdateWithoutCountryInput = {
    programme_type?: EnumProgrammeTypeFieldUpdateOperationsInput | $Enums.ProgrammeType
    region_id?: IntFieldUpdateOperationsInput | number
    cover_image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutProgrammeNestedInput
    thematic_area?: ThematicAreaUpdateOneWithoutProgrammeNestedInput
  }

  export type ProgrammeUncheckedUpdateWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    programme_type?: EnumProgrammeTypeFieldUpdateOperationsInput | $Enums.ProgrammeType
    region_id?: IntFieldUpdateOperationsInput | number
    cover_image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    thematicAreaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProgrammeUncheckedUpdateManyWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    programme_type?: EnumProgrammeTypeFieldUpdateOperationsInput | $Enums.ProgrammeType
    region_id?: IntFieldUpdateOperationsInput | number
    cover_image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    thematicAreaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProgrammeCreateManyThematic_areaInput = {
    id?: number
    programme_type: $Enums.ProgrammeType
    region_id: number
    cover_image: string
    title: string
    description: string
    content: string
    created?: Date | string
    authorId: number
    countryId?: number | null
  }

  export type ProgrammeUpdateWithoutThematic_areaInput = {
    programme_type?: EnumProgrammeTypeFieldUpdateOperationsInput | $Enums.ProgrammeType
    region_id?: IntFieldUpdateOperationsInput | number
    cover_image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutProgrammeNestedInput
    country?: CountryUpdateOneWithoutProgrammeNestedInput
  }

  export type ProgrammeUncheckedUpdateWithoutThematic_areaInput = {
    id?: IntFieldUpdateOperationsInput | number
    programme_type?: EnumProgrammeTypeFieldUpdateOperationsInput | $Enums.ProgrammeType
    region_id?: IntFieldUpdateOperationsInput | number
    cover_image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    countryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProgrammeUncheckedUpdateManyWithoutThematic_areaInput = {
    id?: IntFieldUpdateOperationsInput | number
    programme_type?: EnumProgrammeTypeFieldUpdateOperationsInput | $Enums.ProgrammeType
    region_id?: IntFieldUpdateOperationsInput | number
    cover_image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    countryId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RegionCountOutputTypeDefaultArgs instead
     */
    export type RegionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RegionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CountryCountOutputTypeDefaultArgs instead
     */
    export type CountryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CountryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ThematicAreaCountOutputTypeDefaultArgs instead
     */
    export type ThematicAreaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ThematicAreaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RegionDefaultArgs instead
     */
    export type RegionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RegionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CountryDefaultArgs instead
     */
    export type CountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CountryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ThematicAreaDefaultArgs instead
     */
    export type ThematicAreaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ThematicAreaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProgrammeDefaultArgs instead
     */
    export type ProgrammeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProgrammeDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}