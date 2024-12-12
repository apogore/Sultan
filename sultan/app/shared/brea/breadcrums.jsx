"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./breadcrums.scss";

// Функция для перевода и фильтрации сегментов пути
const translateSegment = (segment) => {
  const translations = {
    catalog: "Каталог",
    product: "Товар",
    about: "О нас",
    contact: "Контакты",
    // Добавьте другие переводы по мере необходимости
  };

  return translations[segment] || segment;
};

// Фильтрация нежелательных сегментов
const excludeSegments = ["shared"];

const Breadcrumbs = () => {
  const path = usePathname(); // Получаем текущий путь
  const pathnames = path
    .split("/")
    .filter((x) => x && !excludeSegments.includes(x)); // Убираем пустые и ненужные сегменты

  return (
    <nav className="breadcrumbs">
      <span className="breadcrumb-item">
        <Link href="/">Главная</Link>
        {pathnames.length > 0 && " ┋ "}
      </span>
      {pathnames.map((value, index) => {
        const href = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <span key={href} className="breadcrumb-item">
            {isLast ? (
              <span>{translateSegment(value)}</span>
            ) : (
              <>
                <Link href={href}>{translateSegment(value)}</Link>
                {" ┋ "}
              </>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;