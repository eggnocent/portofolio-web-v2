"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useSpring, useInView } from "framer-motion"
import { ArrowLeft, Clock } from "lucide-react"
import Link from "next/link"
import type JSX from "jsx" // Import JSX to fix the undeclared variable error
import Image from "next/image"

interface ArticleData {
  id: string
  title: string
  content: string
}

const articleData: ArticleData = {
  id: "last-dance-salt-island",
  title: "a Last Dance in Salt Island",
  content: `
## Prolog: Keputusan di Bawah Rembulan Kemenangan

Malam itu, angin membawa gema kemenangan. Sepakan Cirino di penghujung laga telah menghujam jantung tim ibukota, dua - satu, angka yang terukir di papan skor seperti puisi kemenangan yang dibacakan dengan napas terputus-putus. Kami berpendar di warung mie ayam langganan, tempat di mana mimpi-mimpi sering kali lahir dari percakapan remang-remang.

"Ngopo ra sisan bablaske Meduro?" teman saya bergumam, lebih pada dirinya sendiri daripada pada saya. Sebuah rasan-rasan yang melayang seperti asap rokok di udara malam.

Tanpa ragu, tanpa menimbang jauh ke depan, saya menjawab: "Lha yo ayo!"

Begitulah sebuah perjalanan, dimulai dari gumaman spontan di warung mie ayam, menjelma menjadi ziarah ke pulau yang dijuluki Pulau Garam. Bukan sekadar perjalanan tamasya, melainkan pelayaran menuju ketidakpastian, menuju harapan yang rapuh seperti benang sutra di ujung tombak takdir.

## Perjalanan Menuju Pulau Garam: Mengarungi Lautan Ketidakpastian

### Pra-Pemberangkatan: Menyusuri Jejak Informasi yang Tercecer

Tidak ada peta yang jelas. Tidak ada flyer resmi untuk pemberangkatan rombongan ke Madura. Informasi harus dikumpulkan seperti memungut serpihan kaca yang pecah—satu per satu, hati-hati, takut terluka oleh ketidakpastian. Awalnya berkehendak menempuh jalur kereta, jalur yang sunyi dan kontemplatif. Namun takdir membawa ke rombongan besar yang akan berangkat dengan bus, meski wanti-wanti telah bergaung: kemungkinan besar pintu Pulau Madura akan tertutup rapat untuk kami.

Dini hari, setelah jemari mengetik ritual #PSSday di jagat maya, kami berkumpul di salah satu tempat komunitas. Pukul 01.00 WIB, ketika Sleman masih terlelap dalam pelukan mimpi, rombongan kecil ini berangkat menuju Stadion Maguwoharjo, gerbang awal menuju pulau yang penuh teka-teki.

### Menyeberang ke Madura: Ketika Jembatan Menjadi Ujian

Rombongan besar mulai meninggalkan Stadion Maguwoharjo pada pukul 02.30 WIB, meninggalkan jejak ban di atas aspal yang masih basah oleh embun. Perjalanan panjang telah dimulai. Beberapa kali memejamkan mata, membiarkan tubuh terbawa arus getaran mesin bus, membiarkan pikiran melayang-layang di antara harapan dan keraguan.

Namun jawaban datang terlalu cepat di rest area Sidoarjo, rombongan terpaksa dipecah menjadi serpihan-serpihan lebih kecil. Kabar angin membisikkan cerita tentang rombongan mobil yang sudah berbalik arah menuju Surabaya. Beberapa rekan di bus mengingatkan: bahkan jika berhasil menembus Pulau Madura, tidak ada jaminan tiket akan menanti di ujung perjalanan.

Pukul 09.30, beberapa bus mulai bergerak menuju Jembatan Suramadu, jembatan yang berdiri megah seperti gerbang ke dunia lain. Kami menikmati pemandangan Kota Surabaya yang mulai terbangun dari tidurnya, sementara ketakutan perlahan menggelayut di dada seperti kabut pagi yang tak mau pergi. Jembatan Suramadu, nama yang menjadi momok sejak beberapa minggu sebelumnya, ketika suporter Persija Jakarta dipaksa putar balik, meninggalkan mimpi mereka di tengah jembatan.

Namun kali ini, langit tersenyum. Kami bisa masuk Madura!

## Gelora Bangkalan: Di Persimpangan Harapan dan Kenyataan Pahit

Meskipun berhasil menembus Pulau Madura, rombongan dipaksa menunggu kepastian di Makam Sunan Kholil. Tempat suci yang diselimuti aura spiritual, kini menjadi ruang tunggu bagi kami yang gelisah. Suhu di sana tidak seperti kesejukan Sleman yang akrab di kulit. Panas Madura menusuk seperti jarum, berdebu seperti kenangan lama yang terusik. Lokasi kami berada di area tepi pantai, menambah terik yang membakar kulit dan kesabaran.

Waktu dihabiskan untuk mencuri istirahat, mandi dengan air yang terasa asing di kulit, dan  menunggu kepastian yang enggan datang.

Saya menyantap nasi pecel yang bumbu kacangnya nanggung, tidak sempurna namun cukup untuk meredam kelaparan yang sudah menggerogoti perut sejak malam. Es tehnya tidak seperti es teh Kampul di Solo yang manis dan menyegarkan, namun tetap saya teguk habis. Setelah itu, saya memutuskan untuk "semendhe" di area penginapan, mandi siang dengan air yang tidak segar, air yang asin seperti air mata yang akan kami tumpahkan nanti.

Sembari memantau tweet update untuk pertandingan sore itu, saya sesekali tertidur di tengah gundah gulana, tidur yang tidak nyenyak, penuh harapan buruk tentang tiket yang tak pernah datang.

Hingga pukul 14.30, sebuah update muncul di grup rombongan: "Ayo mas-masku kumpul di bus semua." Kalimat ambigu yang tidak memberikan jawaban jelas, akankah kami mendapat tiket, ataukah harus membubarkan diri dengan tangan hampa?

Kami berkumpul pada pukul 15.00—waktu yang sangat mepet, mengingat kick-off dijadwalkan pukul 15.30 dan jarak dari Makam Sunan Kholil ke stadion hanya sekitar 10 menit dengan bus.

Lalu mukjizat kecil terjadi. Tiket "sak prongkolan" dibagikan kepada perwakilan bus. Teriakan bahagia pun tak terbendung, akhirnya kami bisa mendukung PSS untuk menentukan nasibnya di Liga 1. Tenggukan anggur merah saat pembagian tiket memompa semangat ke dalam nadi-nadi yang lelah, membuat kami tidak sabar ingin segera tiba di Stadion Bangkalan, arena di mana mimpi akan diuji.

Di hati kecil saya bergumam dengan nada menyesal, "Ah ngopo kok ora ket mau tekan stadion, aku ra kebagian zine terakhir musim iki."

### 90 Menit Terakhir di Liga 1: Ketika Harapan Berguguran Seperti Dedaunan di Musim Gugur

Kedatangan kami ke stadion bagaikan datang terlambat ke pemakaman orang yang dicintai—segala sesuatu sudah dimulai tanpa kehadiran kami. PSS sudah berjuang sekitar 10 menit mempertahankan harga dirinya untuk bertahan di kasta tertinggi sepak bola Indonesia. Rombongan terpaksa mengantri panjang, antrian yang sepertinya tidak akan pernah berakhir.

Kami berpindah-pindah gate tribun seperti orang tersesat mencari pintu masuk surga. Di beberapa titik, gate sudah dinyatakan tutup/sudah penuh, sudah tidak bisa menampung mimpi lebih banyak lagi. Kami berpindah ke timur, hingga terlibat konflik kecil dengan aparat berseragam cokelat yang menutup paksa tribun stadion.

**"Kita ini semua punya tiket pak!"** teriak salah seorang dari kami, suaranya penuh amarah yang tertahan.

Berakhir dengan aksi memaksa masuk, menjebol pintu stadion yang sudah dipaksa ditutup, seperti air yang menembus bendungan.

Kami memasuki tribun dari sisi fans Madura United, yang kemudian dipaksa untuk berpindah tribun **"lagi!"** demi alasan keamanan. Dengan berbagai macam cara, memanjat pagar tribun seperti pendaki gunung, meloncat ke bawah shuttle ban seperti atlet parkour, dan merangkak di bibir tribun seperti ulat mencari daun. Akhirnya kami bisa berpindah tribun, meskipun berpencar dengan teman satu bus.

### Gol-Gol yang Melahirkan Harapan Semu: Cahaya di Ujung Terowongan Gelap

Menit ke-36, sepakan Betinho menjadi puisi yang tertulis di udara;bola melayang, menembus ruang, menghujam jantung gawang Madura United yang dijaga Aditya Harlan.

**GOOOOOLLLL! ARRRRGHHHHH!**

Teriakan kami meledak seperti gunung berapi yang lama terpendam. PSS Sleman menjaga asa untuk tidak jatuh ke jurang degradasi. Menit ke-36—angka yang sejenak memberikan harapan, sejenak membuat kami percaya bahwa mukjizat masih mungkin terjadi.

Tidak berselang lama, Gustavo Tocantins menambah defisit menjadi 0-2. Laga ini sepertinya milik Super Elja! Kami mulai bernapas lega dan napas yang terlalu cepat, terlalu naif.

Babak pertama telah usai, namun ketenangan kami diganggu oleh laga lain yang berlangsung paralel, pertandingan Arema melawan Semen Padang yang juga menentukan nasib PSS di Liga 1. Semen Padang, tim yang juga berjuang mati-matian untuk lolos dari jurang degradasi. Gurauan dari beberapa penonton pun sama, seolah membaca skenario yang sudah tertulis: "Ah ini nanti Arema kegolan di menit akhir."

Kami mengobrolkan segala kemungkinan, menghitung-hitung skenario matematis yang rumit, mencoba meyakinkan diri bahwa semuanya akan baik-baik saja.

Di tengah ketegangan itu, akhirnya menemukan penjual lumpia GBT! Sebuah kegembiraan kecil di tengah badai kecemasan. Lega rasanya akhirnya bisa merasakan lumpia legendaris yang sering menjadi pembicaraan ketika setiap fans sepak bola melakukan awaydays ke daerah Surabaya.

### Babak Kedua: Ketika Langit Runtuh Perlahan-Lahan

Babak kedua dimulai seperti babak terakhir dari sebuah drama tragedi. Setengah tribun timur Stadion Bangkalan penuh sesak dengan Sleman Fans, berharap Semen Padang tidak akan memenangkan pertandingan sore itu. Kami berdoa dalam hati, memanjatkan harapan ke langit yang tampak begitu tinggi, begitu jauh.

Menit ke-72, berita buruk datang seperti petir di siang bolong. Semen Padang berhasil membuka keunggulan. Chaby menorehkan namanya di papan skor usai memaksimalkan umpan tarik Cornelius Stewart. Skor 0-1 untuk Semen Padang.

Setelah menonton live score tersebut di ponsel salah satu orang di sebelah saya, beberapa sudut tribun langsung meledak dalam umpatan: **"ALAHHHH SEMEN PADANG NGEGOLKE COKKK!"**

Semenjak itu, suasana tribun berubah drastis, dari penuh harapan menjadi hening mencekam. Seperti pemakaman yang tiba-tiba sunyi ketika peti jenazah diturunkan ke liang kubur. Bahkan capo di atas pagar pun kebingungan, mengapa tidak ada satu orang pun yang bersemangat, padahal PSS masih unggul 0-2 di lapangan?

Setelah capo mengetahui bahwa Semen Padang berhasil mencetak gol, lalu terdengar sayup-sayup, seperti lagu ratapan yang dinyanyikan dengan suara parau:

**"Tak selamanya sayap ini terbang,**
**Suatu saat nanti akan tumbang,**
**Namun janji yang selalu ku pegang,**
**Sleman till I die."**

Walaupun PSS mampu mencetak skor kembali dengan tandukan Cirino pada menit ke-80, gol yang seharusnya membuat kami meledak dalam kegembiraan suasana hati Sleman Fans di tribun tidak berubah. Kami tahu. Kami semua tahu. Cirino dan tim di lapangan pun bingung, mengapa semua Sleman Fans diam saja ketika Cirino mencetak gol?

Lalu satu per satu pun tersadar, seperti bangun dari mimpi buruk untuk menemukan kenyataan yang lebih buruk: di pertandingan lain, Semen Padang berhasil menggandakan skor menjadi 0-2 untuk keunggulan Semen Padang. Angin buruk telah bertiup ke kubu Laskar Sembada. Kemungkinan bertahan pun sangat kecil, bahkan jika PSS mencetak 10 gol sekalipun, karena keuntungan head-to-head poin berpihak pada Semen Padang.

Matematika sudah berbicara. Angka-angka sudah mengukir nasib kami di batu nisan yang tak terlihat.

### Peluit Panjang yang Memilukan: Ketika Dunia Berhenti Berputar

Satu per satu Sleman Fans pun duduk—bukan karena lelah, melainkan karena kehilangan harapan untuk berdiri. Kami enggan berdiri hingga peluit panjang dibunyikan. Beberapa kali umpatan terdengar seperti tangisan yang disamarkan dengan amarah. Deru tangis beberapa fans yang sudah tidak bisa menahan rasa sedihnya memecah hening tribun dengan tangisan yang tulus, tangisan yang tidak malu-malu, tangisan yang lahir dari cinta yang terluka.

Namun tidak ada yang bisa dilakukan. Tidak ada doa yang bisa mengubah kenyataan. PSS Sleman harus turun kasta ke Liga 2 musim depan.

**"Leo bajingan, Leo bajingan, Leo bajingan!"**

Teriakan yang terdengar di tribun timur Stadion Bangkalan, ditujukan kepada manajer yang memimpin PSS semusim penuh. Teriakan yang lahir dari kekecewaan mendalam, dari rasa dikhianati, dari pertanyaan yang tak terjawab: kenapa harus seperti ini?

Saya sendiri sudah tidak sanggup untuk lama-lama memandang lapangan hijau yang kini terasa seperti kuburan besar bagi mimpi-mimpi kami. Sedikit demi sedikit, Sleman Fans berangsur keluar stadion, seperti arwah yang meninggalkan jasad—dan mengeluarkan pecah tangis yang sudah ditahan di dalam tribun.

Dengan penuh rasa kesal, amarah yang membara namun tidak tahu harus dilampiaskan ke mana, bersama teman-teman kami langsung menghampiri bus PSS yang sudah stand by untuk menjemput pemain di lorong stadion. Banyak Sleman Fans mengumpat, mengeluarkan segala isi hati yang sudah terlalu penuh untuk ditampung.

Berangsur selesai. Sleman Fans sudah memasuki bus mereka masing-masing. Namun bagi saya, kesedihan baru mulai ketika bus sudah berjalan pulang menuju Sleman;kesedihan yang lebih dalam, lebih sunyi, lebih mencekik. Sembari menatap jalan yang gelap di luar jendela, saya sesekali membatin dengan pertanyaan yang sama berulang-ulang: kenapa bisa terdegradasi?

## Epilog: Sampai Jumpa, Liga 1—Sebuah Perpisahan yang Memilukan

### Momen yang Tidak Akan Terlupakan: Ketika Pemain Membungkuk di Hadapan Kami

Setelah peluit akhir berbunyi—bunyi yang terdengar seperti lonceng kematian;para pemain PSS Sleman berjalan menuju tribun away dengan langkah berat. Satu per satu mereka membungkuk, meminta maaf dengan wajah yang penuh penyesalan. Mau beribu maaf pun tim ini sudah degradasi. Mereka yang memang hanya mencari nafkah di sini juga pasti akan fine-fine saja, bukan? Hidup mereka akan terus berjalan, sementara kami yang tertinggal dengan hasil yang tidak sama sekali kami harapkan.

Marah. Kecewa. Beberapa kali ada lontaran flare menuju tim di lapangan;cahaya merah yang terbang seperti kutukan, seperti doa yang berubah menjadi amarah.

Namun di balik kekecewaan yang membakar dada, di balik air mata yang membasahi pipi, saya bersyukur. Bersyukur masih bisa menjadi bagian dari perjalanan ini, meski berakhir dengan kepedihan. Bersyukur masih bisa merasakan emosi yang hanya bisa dirasakan oleh mereka yang mencintai sepak bola Sleman dengan sepenuh hati. Bersyukur masih bisa berdiri bersama ribuan orang lain yang memiliki cinta yang sama—cinta yang tak tergoyahkan oleh kasta.

### Perjalanan Pulang: Meninggalkan Mimpi di Pulau Garam

Perjalanan pulang terasa lebih berat daripada perjalanan berangkat. Bukan karena lelah fisik, tetapi karena pikiran kami masih tertinggal di stadion, masih memutar ulang momen-momen 90 menit terakhir itu seperti film yang diputar berulang-ulang. Setiap kali mata terpejam, kami melihat gol-gol yang tercipta, tangisan yang pecah, harapan yang gugur seperti dedaunan di musim gugur.

Setelah mendapatkan sinyal setelah keluar dari Pulau Madura, seolah pulau itu adalah dimensi lain yang terputus dari dunia—langsung menerima pesan WhatsApp dari teman saya yang tidak bisa berangkat: **"giik, degradasi 😭"**

Dua kata dan sebuah emoji yang merangkum semua kesedihan.

Memasuki pukul 23.00, rombongan mampir di rumah makan di daerah Mojokerto. Tak tampak raut bahagia di wajah semua Sleman Fans yang sedang makan. Kami makan dalam diam, mengunyah makanan yang terasa hambar meski mungkin enak. Lha iya lah. Bagaimana bisa merasakan nikmat makanan ketika hati sedang tidak baik-baik saja?

Sampai di Stadion Maguwoharjo pada pukul 01.00 dini hari, rombongan langsung membubarkan diri untuk menuju rumah masing-masing—pulang ke tempat tidur yang dingin, pulang ke mimpi-mimpi yang sudah hancur.

## Penutup: PSS Sleman, keep flying high!

Tidak ada tim yang ingin degradasi. Tidak ada yang ingin jatuh. Tetapi itulah sepak bola;permainan yang indah sekaligus kejam, permainan yang memberi harapan sekaligus merampasnya dengan brutal. Kadang kita menang, kadang kita kalah. Kadang kita naik dengan penuh kebanggaan, kadang kita turun dengan penuh tangis.

Yang tersisa hanyalah kenangan—kenangan perjalanan ke Pulau Garam yang penuh ketidakpastian, kenangan 90 menit terakhir di Liga 1 yang terasa seperti 90 tahun, kenangan tangis yang tertahan di tribun lalu meledak di bus pulang, kenangan janji yang selalu dipegang erat-erat meski dunia runtuh: Sleman till I die.

Kami akan turun ke Liga 2, ya. Kami akan bermain di stadion-stadion yang lebih kecil, melawan tim-tim yang mungkin tidak sepopuler tim-tim Liga 1. Tetapi cinta kami tidak akan turun kasta. Dukungan kami tidak akan berkurang. Karena sejatinya, cinta sejati tidak diukur dari kemenangan atau kekalahan, tidak diukur dari liga berapa tim bermain, tetapi dari kesetiaan yang tetap tegak berdiri bahkan ketika segala sesuatu runtuh.

Sampai jumpa, Liga 1. Kami akan kembali. Suatu hari nanti, kami akan naik kembali—lebih kuat, lebih bijaksana, lebih tangguh.

Karena ini bukan akhir. Ini hanya sebuah bab yang berakhir dengan tragis, sebelum bab baru dimulai dengan harapan yang baru.

**it doesn't count how big you are or how experience you are. if you have passion and desire, you have no limit.**

---

*Ditulis sebagai kenangan dari perjalanan awaydays ke Madura, 19 Juni 2025.*
  `,
}

function AnimatedParagraph({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}

function AnimatedCodeBlock({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-30px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay }}
      className="my-8 group"
    >
      <div
        className="rounded-xl overflow-hidden transition-all duration-300"
        style={{
          backgroundColor: "rgba(22, 97, 14, 0.08)",
          border: "1px solid rgba(22, 97, 14, 0.15)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
        }}
      >
        <div
          className="flex items-center gap-2 px-4 py-3 border-b"
          style={{
            backgroundColor: "rgba(22, 97, 14, 0.05)",
            borderColor: "rgba(22, 97, 14, 0.1)",
          }}
        >
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#16610E" }} />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#F97A00" }} />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FED16A" }} />
        </div>
        <pre className="p-6 overflow-x-auto">
          <code
            className="text-sm leading-relaxed"
            style={{ color: "#16610E", fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            {children}
          </code>
        </pre>
      </div>
    </motion.div>
  )
}

function AnimatedImage({ src, alt, delay = 0 }: { src: string; alt: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="my-8 rounded-xl overflow-hidden"
      style={{
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="relative w-full aspect-video bg-gradient-to-br from-gray-200 to-gray-300">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 896px"
          priority={false}
        />
      </div>
    </motion.div>
  )
}

export default function LastDanceSaltIslandPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const titleInView = useInView(titleRef, { once: true })
  const [readingTime, setReadingTime] = useState(0)

  const { scrollYProgress } = useScroll({
    container: containerRef,
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const wordCount = articleData.content.split(/\s+/).length
    setReadingTime(Math.ceil(wordCount / 200))
  }, [])

  const renderContent = (content: string) => {
    const lines = content.trim().split("\n")
    const elements: JSX.Element[] = []
    let inCodeBlock = false
    let codeContent = ""

    lines.forEach((line, index) => {
      // Tambahkan gambar di atas Prolog
      if (line.startsWith("## Prolog:")) {
        elements.push(
          <AnimatedImage
            key={`image-prolog-${index}`}
            src="/images/last-dance-prolog.jpg"
            alt="Prolog: Keputusan di Bawah Rembulan Kemenangan"
            delay={0.1}
          />,
        )
      }

      // Tambahkan gambar setelah kalimat tentang lumpia GBT
      if (line.includes("Di tengah ketegangan itu, akhirnya menemukan penjual lumpia GBT!")) {
        elements.push(
          <AnimatedParagraph key={`paragraph-${index}`} delay={0.05}>
            <p
              className="text-base md:text-lg leading-relaxed mb-4"
              style={{ color: "#3D3D3D", fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              {renderInlineStyles(line)}
            </p>
          </AnimatedParagraph>,
        )
        elements.push(
          <AnimatedImage
            key={`image-lumpia-${index}`}
            src="/images/last-dance-lumpia.jpg"
            alt="Di tengah ketegangan itu, akhirnya menemukan penjual lumpia GBT!"
            delay={0.1}
          />,
        )
        return
      }

      // Tambahkan gambar di atas Epilog
      if (line.startsWith("## Epilog:")) {
        elements.push(
          <AnimatedImage
            key={`image-epilog-${index}`}
            src="/images/last-dance-epilog.jpg"
            alt="Epilog: Sampai Jumpa, Liga 1—Sebuah Perpisahan yang Memilukan"
            delay={0.1}
          />,
        )
      }

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
        }
        return
      }

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
        return
      }

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
        return
      }

      if (line.startsWith("---")) {
        elements.push(
          <motion.hr
            key={index}
            className="my-12 border-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(22, 97, 14, 0.3), transparent)" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />,
        )
        return
      }

      if (line.startsWith("- ")) {
        elements.push(
          <AnimatedParagraph key={index} delay={0.05}>
            <li
              className="ml-6 mb-2 text-base md:text-lg leading-relaxed list-disc"
              style={{ color: "#3D3D3D", fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              {renderInlineStyles(line.slice(2))}
            </li>
          </AnimatedParagraph>,
        )
        return
      }

      if (line.trim() === "") {
        elements.push(<div key={index} className="h-4" />)
        return
      }

      elements.push(
        <AnimatedParagraph key={index} delay={0.05}>
          <p
            className="text-base md:text-lg leading-relaxed mb-4"
            style={{ color: "#3D3D3D", fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            {renderInlineStyles(line)}
          </p>
        </AnimatedParagraph>,
      )
    })

    return elements
  }

  const renderInlineStyles = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g)
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-bold" style={{ color: "#F97A00" }}>
            {part.slice(2, -2)}
          </strong>
        )
      }
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
    <div ref={containerRef} className="min-h-screen overflow-y-auto relative" style={{ backgroundColor: "#FED16A" }}>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
        style={{
          scaleX,
          background: "linear-gradient(90deg, #16610E 0%, #F97A00 100%)",
        }}
      />

      {/* Web3 Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(22, 97, 14, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(22, 97, 14, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #16610E 0%, transparent 70%)",
            top: "10%",
            right: "-10%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute w-64 h-64 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #F97A00 0%, transparent 70%)",
            bottom: "20%",
            left: "-5%",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.12, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute w-4 h-4 border-2 rounded-sm"
          style={{ borderColor: "#16610E", top: "30%", left: "10%" }}
          animate={{ rotate: 360, y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute w-6 h-6 border-2 rounded-full"
          style={{ borderColor: "#F97A00", top: "60%", right: "15%" }}
          animate={{ rotate: -360, x: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-md" style={{ backgroundColor: "rgba(254, 209, 106, 0.9)" }}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/reading-klab">
            <motion.button
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: "#16610E", fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali
            </motion.button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full"
            style={{
              backgroundColor: "rgba(22, 97, 14, 0.1)",
              border: "1px solid rgba(22, 97, 14, 0.2)",
            }}
          >
            <Clock className="w-3.5 h-3.5" style={{ color: "#16610E" }} />
            <span
              className="text-xs font-medium"
              style={{ color: "#16610E", fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              {readingTime} min read
            </span>
          </motion.div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-6 py-12 relative z-10">
        {/* Article header */}
        <motion.div ref={titleRef} className="mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              backgroundColor: "rgba(22, 97, 14, 0.1)",
              border: "1px solid rgba(22, 97, 14, 0.2)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="text-xs font-semibold tracking-wider uppercase"
              style={{ color: "#16610E", fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              FOOTBALL
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

          <motion.p
            className="mt-4 text-lg"
            style={{ color: "#16610E", fontFamily: "var(--font-jetbrains-mono), monospace" }}
            initial={{ y: 20, opacity: 0 }}
            animate={titleInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Madura United vs PSS Sleman — Pertandingan Terakhir di Liga 1 2024/2025 yang Berujung Degradasi
          </motion.p>

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

        {/* End marker */}
        <motion.div
          className="flex flex-col items-center justify-center py-16 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px" style={{ backgroundColor: "#16610E" }} />
            <div className="w-3 h-3 rotate-45" style={{ backgroundColor: "#F97A00" }} />
            <div className="w-12 h-px" style={{ backgroundColor: "#16610E" }} />
          </div>
          <p
            className="text-sm tracking-widest uppercase"
            style={{ color: "#16610E", fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            End of Article
          </p>
        </motion.div>
      </main>
    </div>
  )
}
