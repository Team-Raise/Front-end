import React from 'react';
import dynamic from "next/dynamic";

const Index = dynamic(() => import("./StateRendering"), {
  ssr: false,
});

export default Index;