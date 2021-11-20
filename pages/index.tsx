/* This example requires Tailwind CSS v2.0+ */
import react, { useState } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '@layouts/Header';

export default function Homepage() {
  const router = useRouter();

  return (
    <>
      <Header />
    </>
  );
}
