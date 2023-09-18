select "g"."name" as "genre",
       count(*) as "movieCount"
  from "films" as "f"
  join "filmGenre" as "fg" using ("filmId")
  join "genres" as "g" using ("genreId")
  join "castMembers" as "cm" using ("filmId")
  join "actors" as "a" using ("actorId")
  where "a"."firstName" = 'Lisa' AND "a"."lastName" = 'Monroe'
  group by "g"."name";
