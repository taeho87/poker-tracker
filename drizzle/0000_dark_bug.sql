CREATE TABLE `tournaments` (
	`id` text PRIMARY KEY NOT NULL,
	`date` text NOT NULL,
	`name` text NOT NULL,
	`venue` text DEFAULT '' NOT NULL,
	`buyin` integer NOT NULL,
	`entries` integer NOT NULL,
	`extra` integer DEFAULT 0 NOT NULL,
	`prize` integer DEFAULT 0 NOT NULL,
	`rank` integer,
	`players` integer,
	`itm` integer DEFAULT 0 NOT NULL,
	`notes` text DEFAULT '' NOT NULL
);
