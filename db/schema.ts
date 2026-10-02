import {integer,sqliteTable,text} from 'drizzle-orm/sqlite-core';
export const tournaments=sqliteTable('tournaments',{
 id:text('id').primaryKey(),date:text('date').notNull(),name:text('name').notNull(),venue:text('venue').notNull().default(''),
 buyin:integer('buyin').notNull(),totalInput:integer('total_input').notNull().default(0),entries:integer('entries').notNull(),extra:integer('extra').notNull().default(0),
 prize:integer('prize').notNull().default(0),rank:integer('rank'),players:integer('players'),itm:integer('itm').notNull().default(0),notes:text('notes').notNull().default('')
});
