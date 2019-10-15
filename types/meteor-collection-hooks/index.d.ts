// Type definitions for non-npm package Meteor package matb33:collection-hooks 0.8
// Project: https://github.com/matb33/meteor-collection-hooks
// Definitions by:  Trygve Wastvedt <https://github.com/twastvedt>
//                  Joseph Tong <https://github.com/josephto>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="meteor-mongo.d.ts" />

declare namespace Mongo {
  interface Collection<T> {
    before: {
      find(hook: (
          userId: string,
          selector: Mongo.Selector<T>,
          options: CollectionHooks.ModifierOptions
        ) => void
      ): void;
      findOne(hook: (
          userId: string,
          selector: Mongo.Selector<T>,
          options: CollectionHooks.ModifierOptions
        ) => void
      ): void;
      insert(hook: (
          userId: string,
          doc: T
        ) => void
      ): void;
      remove(hook: (
          userId: string,
          doc: T
        ) => void
      ): void;
      update(hook: (
          userId: string,
          doc: T,
          fieldNames: string[],
          modifier: Mongo.Modifier<T>,
          options: CollectionHooks.ModifierOptions
        ) => void
      ): void;
      upsert(hook: (
          userId: string,
          doc: T,
          selector: Mongo.Selector<T>,
          modifier: Mongo.Modifier<T>,
          options: CollectionHooks.ModifierOptions
        ) => void
      ): void;
    };
    after: {
      find(hook: (
          userId: string,
          selector: Mongo.Selector<T>,
          options: CollectionHooks.ModifierOptions,
          cursor: Mongo.Cursor<T>
        ) => void
      ): void;
      findOne(hook: (
          userId: string,
          selector: Mongo.Selector<T>,
          options: CollectionHooks.ModifierOptions,
          doc: T
        ) => void
      ): void;
      insert(hook: (
          userId: string,
          doc: T
        ) => void
      ): void;
      remove(hook: (
          userId: string,
          doc: T
        ) => void
      ): void;
      update(
        hook: (
          userId: string,
          doc: T,
          fieldNames: string[],
          modifier: Mongo.Modifier<T>,
          options: CollectionHooks.ModifierOptions
        ) => void,
        options?: CollectionHooks.HookOptionValue
      ): void;
      upsert(
        hook: (
          userId: string,
          doc: T,
          selector: Mongo.Selector<T>,
          modifier: Mongo.Modifier<T>,
          options: CollectionHooks.ModifierOptions
        ) => void
      ): void;
    };
    direct: {
      find(selector?: Mongo.Selector<T> | Mongo.ObjectID | string, options?: {
        sort?: Mongo.SortSpecifier;
        skip?: number;
        limit?: number;
        fields?: Mongo.FieldSpecifier;
        reactive?: boolean;
        transform?(doc: any): void;
      }): Mongo.Cursor<T>;
      findOne(selector?: Mongo.Selector<T> | Mongo.ObjectID | string, options?: {
        sort?: Mongo.SortSpecifier;
        skip?: number;
        fields?: Mongo.FieldSpecifier;
        reactive?: boolean;
        transform?(doc: any): void;
      }): T;
      insert(
        doc: T,
        callback?: () => void
      ): string;
      remove(
        selector: Mongo.Selector<T> | Mongo.ObjectID | string, callback?: () => void
      ): number;
      update(
        selector: Mongo.Selector<T> | Mongo.ObjectID | string, modifier: Mongo.Modifier<T>, options?: {
          multi?: boolean;
          upsert?: boolean;
        },
        callback?: () => void
      ): number;
      upsert(
        selector: Mongo.Selector<T> | Mongo.ObjectID | string, modifier: Mongo.Modifier<T>, options?: {
          multi?: boolean;
        },
        callback?: () => void
      ): { numberAffected?: number; insertedId?: string; };
    };
    hookOptions: CollectionHooks.GlobalHookOptions;
  }
}

declare namespace CollectionHooks {
  interface ModifierOptions {
    multi?: boolean;
    upsert?: boolean;
  }

  interface HookOptionValue {
    fetchPrevious?: boolean;
  }

  interface LocalHookOptions {
    all?: HookOptionValue;
    find?: HookOptionValue;
    findOne?: HookOptionValue;
    insert?: HookOptionValue;
    remove?: HookOptionValue;
    update?: HookOptionValue;
    upsert?: HookOptionValue;
  }

  interface GlobalHookOptions {
    before?: LocalHookOptions;
    after?: LocalHookOptions;
    all?: LocalHookOptions;
  }
}
