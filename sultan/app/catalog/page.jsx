"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useParams } from 'react-router-dom';
import FastFilters from "@shared/function/fast-filters";
import Button from "@ui/button/button";
import "./page.scss";

const Catalog = () => {

  const router = useRouter();

  return (
    <div className="catalog-page">
      <FastFilters></FastFilters>
    </div>
  );
};

export default Catalog;