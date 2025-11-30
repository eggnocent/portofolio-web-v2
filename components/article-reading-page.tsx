"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useSpring, useInView } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { JSX } from "react/jsx-runtime"

interface ArticleData {
  id: string
  title: string
  content: string
}

const articleData: ArticleData = {
  id: "1",
  title: "Entering for Go Programming",
  content: `
## Selamat Datang di Dunia Go!

Halo! Selamat datang di perjalanan belajar bahasa pemrograman Go (atau sering disebut Golang). Artikel ini dibuat khusus untuk kamu yang baru pertama kali mengenal Go, atau bahkan baru pertama kali belajar programming. Tenang saja, kita akan belajar pelan-pelan dari dasar.

Go adalah bahasa pemrograman yang diciptakan oleh Google pada tahun 2009. Bahasa ini dirancang untuk menjadi **sederhana**, **cepat**, dan **mudah dipelajari**. Bayangkan Go seperti bahasa Indonesia yang baku — tidak terlalu rumit, tapi sangat efektif untuk berkomunikasi.

## Kenapa Harus Belajar Go?

### 1. Mudah Dipelajari

Go hanya memiliki **25 kata kunci** (keywords). Bandingkan dengan bahasa lain yang bisa memiliki ratusan kata kunci. Ini membuat Go sangat mudah untuk dipelajari, bahkan untuk pemula.

### 2. Sangat Cepat

Go adalah bahasa yang dikompilasi langsung ke kode mesin. Artinya program Go berjalan sangat cepat, hampir secepat program yang ditulis dalam bahasa C atau C++.

### 3. Digunakan Perusahaan Besar

Go digunakan oleh banyak perusahaan teknologi besar seperti **Google**, **Netflix**, **Uber**, **Tokopedia**, dan **Gojek**. Jadi kalau kamu menguasai Go, peluang karirmu akan semakin terbuka lebar!

## Persiapan Sebelum Mulai

Sebelum kita mulai coding, pastikan kamu sudah menginstall Go di komputermu. Kamu bisa download Go dari website resminya di golang.org.

Setelah install, buka terminal atau command prompt, lalu ketik:

\`\`\`go
go version
\`\`\`

Jika muncul versi Go (misalnya "go version go1.21.0"), berarti instalasimu sudah berhasil!

## Program Pertamamu: Hello World!

Mari kita mulai dengan tradisi programmer di seluruh dunia — membuat program Hello World. Buat file baru dengan nama \`main.go\` dan tulis kode berikut:

\`\`\`go
package main

import "fmt"

func main() {
    fmt.Println("Halo, Dunia!")
    fmt.Println("Selamat datang di Go!")
}
\`\`\`

Untuk menjalankan program ini, buka terminal di folder tempat file tersebut, lalu ketik:

\`\`\`go
go run main.go
\`\`\`

Selamat! Kamu baru saja menjalankan program Go pertamamu!

## Memahami Struktur Dasar Go

Mari kita bedah kode di atas baris per baris:

**package main** — Setiap file Go harus dimulai dengan deklarasi package. Package \`main\` adalah package khusus yang menandakan ini adalah program yang bisa dijalankan.

**import "fmt"** — Kita mengimpor package \`fmt\` (format) yang berisi fungsi-fungsi untuk mencetak teks ke layar.

**func main()** — Ini adalah fungsi utama yang akan dijalankan pertama kali ketika program dimulai. Setiap program Go yang bisa dijalankan harus memiliki fungsi main.

## Variabel: Menyimpan Data

Variabel adalah tempat untuk menyimpan data. Di Go, ada beberapa cara untuk membuat variabel:

\`\`\`go
package main

import "fmt"

func main() {
    // Cara 1: Deklarasi lengkap
    var nama string = "Budi"
    
    // Cara 2: Go otomatis mendeteksi tipe data
    var umur = 25
    
    // Cara 3: Cara singkat (paling sering digunakan)
    kota := "Jakarta"
    sudahMenikah := false
    
    fmt.Println("Nama:", nama)
    fmt.Println("Umur:", umur)
    fmt.Println("Kota:", kota)
    fmt.Println("Sudah Menikah:", sudahMenikah)
}
\`\`\`

Tanda \`:=\` adalah cara singkat untuk membuat variabel baru. Go akan otomatis mendeteksi tipe datanya.

## Tipe Data Dasar

Go memiliki beberapa tipe data dasar yang perlu kamu ketahui:

\`\`\`go
package main

import "fmt"

func main() {
    // String - untuk teks
    var pesan string = "Halo semua!"
    
    // Integer - untuk bilangan bulat
    var jumlah int = 100
    
    // Float - untuk bilangan desimal
    var harga float64 = 25000.50
    
    // Boolean - untuk nilai benar/salah
    var aktif bool = true
    
    fmt.Println(pesan)
    fmt.Println("Jumlah:", jumlah)
    fmt.Println("Harga:", harga)
    fmt.Println("Status Aktif:", aktif)
}
\`\`\`

## Percabangan: Membuat Keputusan

Program seringkali perlu membuat keputusan. Di Go, kita menggunakan \`if\` dan \`else\`:

\`\`\`go
package main

import "fmt"

func main() {
    nilai := 75
    
    if nilai >= 80 {
        fmt.Println("Selamat! Kamu dapat nilai A")
    } else if nilai >= 70 {
        fmt.Println("Bagus! Kamu dapat nilai B")
    } else if nilai >= 60 {
        fmt.Println("Cukup. Kamu dapat nilai C")
    } else {
        fmt.Println("Ayo belajar lebih giat lagi!")
    }
}
\`\`\`

## Perulangan: Mengulang Aksi

Untuk mengulang sesuatu berkali-kali, Go menggunakan \`for\`:

\`\`\`go
package main

import "fmt"

func main() {
    // Cara 1: For klasik
    fmt.Println("Hitungan 1-5:")
    for i := 1; i <= 5; i++ {
        fmt.Println(i)
    }
    
    // Cara 2: For seperti while
    fmt.Println("Countdown:")
    hitung := 3
    for hitung > 0 {
        fmt.Println(hitung)
        hitung--
    }
    fmt.Println("Mulai!")
}
\`\`\`

## Fungsi: Membuat Kode yang Rapi

Fungsi membantu kita mengorganisir kode menjadi bagian-bagian kecil yang bisa digunakan ulang:

\`\`\`go
package main

import "fmt"

// Fungsi sederhana
func spiAplikasi() {
    fmt.Println("=== Aplikasi Kalkulator ===")
}

// Fungsi dengan parameter
func spiNama(nama string) {
    fmt.Println("Halo,", nama, "!")
}

// Fungsi dengan return value
func tambah(a int, b int) int {
    return a + b
}

// Fungsi dengan multiple return
func bagi(a, b float64) (float64, string) {
    if b == 0 {
        return 0, "Error: Tidak bisa dibagi nol!"
    }
    return a / b, "Berhasil"
}

func main() {
    spiAplikasi()
    spiNama("Andi")
    
    hasil := tambah(10, 5)
    fmt.Println("10 + 5 =", hasil)
    
    hasilBagi, pesan := bagi(20, 4)
    fmt.Println("20 / 4 =", hasilBagi, "-", pesan)
}
\`\`\`

## Slice: Menyimpan Banyak Data

Slice adalah cara Go untuk menyimpan kumpulan data:

\`\`\`go
package main

import "fmt"

func main() {
    // Membuat slice
    buah := []string{"Apel", "Mangga", "Jeruk"}
    
    // Menambah data
    buah = append(buah, "Pisang")
    
    // Mengakses data
    fmt.Println("Buah pertama:", buah[0])
    fmt.Println("Semua buah:", buah)
    fmt.Println("Jumlah buah:", len(buah))
    
    // Perulangan slice
    fmt.Println("Daftar buah:")
    for index, nama := range buah {
        fmt.Printf("%d. %s\n", index+1, nama)
    }
}
\`\`\`

## Struct: Membuat Tipe Data Sendiri

Struct memungkinkan kita membuat tipe data custom:

\`\`\`go
package main

import "fmt"

// Mendefinisikan struct
type Mahasiswa struct {
    Nama    string
    NIM     string
    Jurusan string
    IPK     float64
}

func main() {
    // Membuat instance struct
    mhs1 := Mahasiswa{
        Nama:    "Rina Wijaya",
        NIM:     "2021001",
        Jurusan: "Teknik Informatika",
        IPK:     3.75,
    }
    
    // Mengakses field struct
    fmt.Println("Data Mahasiswa:")
    fmt.Println("Nama:", mhs1.Nama)
    fmt.Println("NIM:", mhs1.NIM)
    fmt.Println("Jurusan:", mhs1.Jurusan)
    fmt.Println("IPK:", mhs1.IPK)
}
\`\`\`

## Tips untuk Pemula

- **Ketik sendiri kodenya** — Jangan copy-paste. Mengetik sendiri membantu otakmu mengingat.
- **Eksperimen** — Ubah-ubah kodenya, lihat apa yang terjadi. Jangan takut error!
- **Baca pesan error** — Go memberikan pesan error yang sangat jelas. Baca dan pahami.
- **Konsisten** — Luangkan waktu setiap hari untuk belajar, walau hanya 30 menit.
- **Bangun project** — Setelah paham dasar, langsung coba buat project kecil.

## Langkah Selanjutnya

Setelah menguasai dasar-dasar ini, kamu bisa melanjutkan belajar:

- **Error Handling** — Cara menangani error dengan baik
- **Concurrency** — Goroutines dan Channels untuk program paralel
- **Web Development** — Membuat API dan web server dengan Go
- **Database** — Menghubungkan Go dengan database

---

*Perjalanan seribu mil dimulai dari satu langkah. Selamat belajar dan jangan pernah berhenti coding!*
  `,
}

// Animated paragraph component
function AnimatedParagraph({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

// Animated code block with web3 glassmorphism style
function AnimatedCodeBlock({ children, delay = 0 }: { children: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-30px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="relative group my-8"
    >
      {/* Web3 glow effect */}
      <div
        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(22, 97, 14, 0.3) 0%, rgba(249, 122, 0, 0.2) 50%, rgba(254, 209, 106, 0.3) 100%)",
        }}
      />
      {/* Glassmorphism container */}
      <pre
        className="relative p-6 rounded-2xl overflow-x-auto text-sm leading-relaxed backdrop-blur-sm"
        style={{
          backgroundColor: "rgba(13, 13, 13, 0.95)",
          border: "1px solid rgba(22, 97, 14, 0.3)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Code header bar */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#F97A00" }} />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FED16A" }} />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#16610E" }} />
          <span className="ml-2 text-xs text-white/40" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
            code
          </span>
        </div>
        <code className="text-[#FED16A]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
          {children}
        </code>
      </pre>
    </motion.div>
  )
}

export default function ArticleReadingPage() {
  const articleRef = useRef<HTMLElement>(null)
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ["start start", "end end"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Render content with animations
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n")
    const elements: JSX.Element[] = []
    let inCodeBlock = false
    let codeContent = ""
    let elementIndex = 0

    lines.forEach((line, index) => {
      // Code block start/end
      if (line.startsWith("```")) {
        if (!inCodeBlock) {
          inCodeBlock = true
          codeContent = ""
        } else {
          inCodeBlock = false
          elements.push(
            <AnimatedCodeBlock key={index} delay={0.1}>
              {codeContent.trim()}
            </AnimatedCodeBlock>,
          )
          elementIndex++
        }
        return
      }

      if (inCodeBlock) {
        codeContent += line + "\n"
        return
      }

      // H2 Headers
      if (line.startsWith("## ")) {
        elements.push(
          <AnimatedParagraph key={index} delay={0.05}>
            <h2
              className="text-2xl md:text-3xl font-bold mt-16 mb-6"
              style={{ color: "#0d0d0d", fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              {line.slice(3)}
            </h2>
          </AnimatedParagraph>,
        )
        elementIndex++
        return
      }

      // H3 Headers
      if (line.startsWith("### ")) {
        elements.push(
          <AnimatedParagraph key={index} delay={0.05}>
            <h3
              className="text-xl md:text-2xl font-semibold mt-10 mb-4"
              style={{ color: "#16610E", fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              {line.slice(4)}
            </h3>
          </AnimatedParagraph>,
        )
        elementIndex++
        return
      }

      // Horizontal rule
      if (line.startsWith("---")) {
        elements.push(
          <motion.div
            key={index}
            className="my-12 flex items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex-1 h-px" style={{ backgroundColor: "rgba(22, 97, 14, 0.3)" }} />
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#F97A00" }} />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#16610E" }} />
            </div>
            <div className="flex-1 h-px" style={{ backgroundColor: "rgba(22, 97, 14, 0.3)" }} />
          </motion.div>,
        )
        return
      }

      // List items
      if (line.startsWith("- ")) {
        elements.push(
          <AnimatedParagraph key={index} delay={0.05}>
            <li
              className="ml-6 mb-3 text-base leading-relaxed list-none flex items-start gap-3"
              style={{ color: "#1a1a1a", fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#16610E" }} />
              {renderInlineStyles(line.slice(2))}
            </li>
          </AnimatedParagraph>,
        )
        elementIndex++
        return
      }

      // Italic/quote paragraph
      if (line.startsWith("*") && line.endsWith("*") && !line.startsWith("**")) {
        elements.push(
          <AnimatedParagraph key={index} delay={0.05}>
            <div
              className="my-8 p-6 rounded-xl relative overflow-hidden"
              style={{
                backgroundColor: "rgba(22, 97, 14, 0.08)",
                border: "1px solid rgba(22, 97, 14, 0.2)",
                fontFamily: "var(--font-jetbrains-mono), monospace",
              }}
            >
              <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: "#F97A00" }} />
              <p className="text-base italic leading-relaxed pl-4" style={{ color: "#16610E" }}>
                {line.slice(1, -1)}
              </p>
            </div>
          </AnimatedParagraph>,
        )
        elementIndex++
        return
      }

      // Regular paragraph
      if (line.trim()) {
        elements.push(
          <AnimatedParagraph key={index} delay={0.05}>
            <p
              className="my-5 text-base leading-relaxed"
              style={{ color: "#1a1a1a", fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              {renderInlineStyles(line)}
            </p>
          </AnimatedParagraph>,
        )
        elementIndex++
      }
    })

    return elements
  }

  const renderInlineStyles = (text: string) => {
    // Bold text
    const parts = text.split(/(\*\*[^*]+\*\*)/g)
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-bold" style={{ color: "#F97A00" }}>
            {part.slice(2, -2)}
          </strong>
        )
      }
      // Inline code
      const codeParts = part.split(/(`[^`]+`)/g)
      return codeParts.map((codePart, j) => {
        if (codePart.startsWith("`") && codePart.endsWith("`")) {
          return (
            <code
              key={`${i}-${j}`}
              className="px-2 py-1 rounded-md text-sm"
              style={{
                backgroundColor: "rgba(22, 97, 14, 0.15)",
                color: "#16610E",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                border: "1px solid rgba(22, 97, 14, 0.2)",
              }}
            >
              {codePart.slice(1, -1)}
            </code>
          )
        }
        return codePart
      })
    })
  }

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#FED16A", fontFamily: "var(--font-jetbrains-mono), monospace" }}
    >
      {/* Progress bar with gradient */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left z-50"
        style={{
          scaleX,
          background: "linear-gradient(90deg, #16610E 0%, #F97A00 100%)",
        }}
      />

      {/* Web3 grid pattern background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(22, 97, 14, 1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(22, 97, 14, 1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating geometric shapes - web3 style */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: 80 + i * 20,
              height: 80 + i * 20,
              border: `1px solid ${i % 2 === 0 ? "rgba(22, 97, 14, 0.15)" : "rgba(249, 122, 0, 0.15)"}`,
              borderRadius: i % 2 === 0 ? "50%" : "8px",
              left: `${10 + i * 25}%`,
              top: `${15 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, i % 2 === 0 ? 180 : -180, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 1,
            }}
          />
        ))}
      </div>

      {/* Ambient gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[180px] opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(22, 97, 14, 0.4) 0%, transparent 70%)",
            top: "5%",
            right: "-15%",
          }}
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[150px] opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(249, 122, 0, 0.4) 0%, transparent 70%)",
            bottom: "15%",
            left: "-10%",
          }}
          animate={{ x: [0, 40, 0], y: [0, -25, 0] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
        />
      </div>

      {/* Back button - glassmorphism style */}
      <motion.div
        className="fixed top-6 left-6 z-40"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link
          href="/reading-klab"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full backdrop-blur-md transition-all hover:scale-105 group"
          style={{
            backgroundColor: "rgba(13, 13, 13, 0.85)",
            color: "#FED16A",
            border: "1px solid rgba(254, 209, 106, 0.2)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            fontFamily: "var(--font-jetbrains-mono), monospace",
          }}
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back</span>
        </Link>
      </motion.div>

      {/* Reading time indicator */}
      <motion.div
        className="fixed top-6 right-6 z-40"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div
          className="px-4 py-2 rounded-full backdrop-blur-md"
          style={{
            backgroundColor: "rgba(22, 97, 14, 0.9)",
            color: "#FED16A",
            border: "1px solid rgba(254, 209, 106, 0.2)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            fontFamily: "var(--font-jetbrains-mono), monospace",
          }}
        >
          <span className="text-xs font-medium">~15 min read</span>
        </div>
      </motion.div>

      {/* Article content */}
      <article ref={articleRef} className="relative px-6 py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          {/* Title with reveal animation */}
          <motion.div
            ref={titleRef}
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tag badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{
                backgroundColor: "rgba(22, 97, 14, 0.15)",
                border: "1px solid rgba(22, 97, 14, 0.3)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#16610E" }} />
              <span
                className="text-xs font-medium"
                style={{ color: "#16610E", fontFamily: "var(--font-jetbrains-mono), monospace" }}
              >
                PROGRAMMING
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              style={{ color: "#0d0d0d", fontFamily: "var(--font-jetbrains-mono), monospace" }}
              initial={{ y: 40, opacity: 0 }}
              animate={titleInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {articleData.title}
            </motion.h1>

            {/* Animated underline with gradient */}
            <motion.div
              className="h-1 mt-6 rounded-full"
              style={{ background: "linear-gradient(90deg, #16610E 0%, #F97A00 100%)" }}
              initial={{ width: 0 }}
              animate={titleInView ? { width: "150px" } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
          </motion.div>

          {/* Article body */}
          <div className="prose-lg">{renderContent(articleData.content)}</div>

          {/* End marker - web3 style */}
          <motion.div
            className="flex flex-col items-center justify-center mt-24 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-px" style={{ backgroundColor: "rgba(22, 97, 14, 0.3)" }} />
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#F97A00" }} />
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#16610E" }} />
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#0d0d0d" }} />
              </div>
              <div className="w-8 h-px" style={{ backgroundColor: "rgba(22, 97, 14, 0.3)" }} />
            </div>
            <span
              className="text-xs"
              style={{
                color: "rgba(22, 97, 14, 0.6)",
                fontFamily: "var(--font-jetbrains-mono), monospace",
              }}
            >
              END OF ARTICLE
            </span>
          </motion.div>
        </div>
      </article>
    </div>
  )
}
