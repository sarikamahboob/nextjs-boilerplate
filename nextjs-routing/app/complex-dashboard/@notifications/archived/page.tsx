import Card from "@/components/card";
import Link from "next/link";
import React from "react";

const ArchivedNotificaions = () => {
  return (
    <Card>
      <div>Archived Notificaions</div>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
};

export default ArchivedNotificaions;
