select "c"."firstName",
      "c"."lastName",
       sum("amount") as "totalSpent"
  from "payments"
  join "customers" as "c" using ("customerId")
  group by "customerId"
  order by "totalSpent" desc;
