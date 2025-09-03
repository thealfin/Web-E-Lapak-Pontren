<template>
  <!-- lets now create a banner  -->

  <section class="banner-sec" :style="{ backgroundImage: `url(${tagline})` }">
    <div class="container">
      <div class="header-main-text">
        <h5>Dapatkan potongan 20% untuk pembelian pertama Anda</h5>
        <h1>Berbagai UMKM yang ada di seluruh Indonesia</h1>
        <p>
          Bayangkan, setiap kali Anda berbelanja, ada senyum santri yang terbantu, ada usaha kecil
          yang terus berkembang, dan ada doa-doa kebaikan yang terpanjat. Bersama UMKM pesantren,
          belanja Anda tidak hanya memberi manfaat bagi diri sendiri, tapi juga menebar keberkahan
          bagi banyak orang. <br />Bersama UMKM Pondok Pesantren,<br />
          Belanja Berkah Penggerak Ekonomi Syariah.
        </p>
        <div class="nav-btn mt-4"><a href="">Belanja Sekarang!</a></div>
      </div>
    </div>
  </section>

  <!-- lets make category  -->

  <section class="item-header-sec py-5">
    <div class="container">
      <div class="item-slider text-center">
        <div class="items-header">
          <img src="@/assets/img/Kuliner.png" alt="" />
          <h4>UMKM Kuliner Pesantren</h4>
        </div>
        <div class="items-header">
          <img src="@/assets/img/Kerajinan tangan.png" alt="" />
          <h4>UMKM Kerajinan Tangan Pesantren</h4>
        </div>

        <div class="items-header">
          <img src="@/assets/img/Fashion.png" alt="" />
          <h4>UMKM Fashion Pesantren</h4>
        </div>

        <div class="items-header">
          <img src="@/assets/img/Agribisnis.png" alt="" />
          <h4>UMKM Agribisnis Pesantren</h4>
        </div>

        <div class="items-header">
          <img src="@/assets/img/Jasa dan layanan.png" alt="" />
          <h4>UMKM Jasa & Layanan Pesantren</h4>
        </div>

        <div class="items-header">
          <img src="@/assets/img/Digital kreatif.png" alt="" />
          <h4>UMKM Digital Kreatif Pesantren</h4>
        </div>

        <div class="items-header">
          <img src="@/assets/img/Koperasi.png" alt="" />
          <h4>UMKM Niaga & Koperasi Pesantren</h4>
        </div>
      </div>
    </div>
  </section>

  <!-- lets make product section  -->

  <section class="product-sec pb-5">
    <div class="container">
      <h2 class="title text-center">Produk Kuliner Teratas Bulan ini..!</h2>

      <div class="product-slider mt-5">
        <div class="col-md-3">
          <div class="product-box">
            <div class="pr-icons">
              <ul>
                <li>
                  <a href=""><i class="fa-solid fa-user"></i></a>
                </li>
                <li>
                  <a href=""><i class="fa-solid fa-heart"></i></a>
                </li>
                <li>
                  <a href=""><i class="fa-solid fa-eye"></i></a>
                </li>
              </ul>
            </div>

            <div class="pr-img">
              <img src="@/assets/img/Serabi.png" alt="" />
            </div>

            <div class="pr-text">
              <h6>Stock tersedia</h6>
              <h5>Serabi Solo</h5>
              <span class="price">2,5k/buah</span>
              <div class="cart-btn">
                <a href="">Tambahkan ke keranjang <i class="fa-solid fa-cart-shopping"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="product-box">
            <div class="pr-icons">
              <ul>
                <li>
                  <a href=""><i class="fa-solid fa-user"></i></a>
                </li>
                <li>
                  <a href=""><i class="fa-solid fa-heart"></i></a>
                </li>
                <li>
                  <a href=""><i class="fa-solid fa-eye"></i></a>
                </li>
              </ul>
            </div>

            <div class="pr-img">
              <img src="@/assets/img/Kebab.png" alt="" />
            </div>

            <div class="pr-text">
              <h6>Stock tersedia</h6>
              <h5>Kebab</h5>
              <span class="price">15k/gulung</span>
              <div class="cart-btn">
                <a href="">Tambahkan ke keranjang <i class="fa-solid fa-cart-shopping"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="product-box">
            <div class="pr-icons">
              <ul>
                <li>
                  <a href=""><i class="fa-solid fa-user"></i></a>
                </li>
                <li>
                  <a href=""><i class="fa-solid fa-heart"></i></a>
                </li>
                <li>
                  <a href=""><i class="fa-solid fa-eye"></i></a>
                </li>
              </ul>
            </div>

            <div class="pr-img">
              <img src="@/assets/img/3.png" alt="" />
            </div>

            <div class="pr-text">
              <h6>Stock tersedia</h6>
              <h5>Jajanan pasar</h5>
              <span class="price">1k/buah</span>
              <div class="cart-btn">
                <a href="">Tambahkan ke keranjang <i class="fa-solid fa-cart-shopping"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="product-box">
            <div class="pr-icons">
              <ul>
                <li>
                  <a href=""><i class="fa-solid fa-user"></i></a>
                </li>
                <li>
                  <a href=""><i class="fa-solid fa-heart"></i></a>
                </li>
                <li>
                  <a href=""><i class="fa-solid fa-eye"></i></a>
                </li>
              </ul>
            </div>

            <div class="pr-img">
              <img src="@/assets/img/4.png" alt="" />
            </div>

            <div class="pr-text">
              <h6>Stock tersedia</h6>
              <h5>Boba berbagai rasa</h5>
              <span class="price">15k/gelas</span>
              <div class="cart-btn">
                <a href="">Tambahkan ke keranjang <i class="fa-solid fa-cart-shopping"></i></a>
              </div>
            </div>
          </div>
        </div>
        <!-- additional products... -->
      </div>
    </div>
  </section>

  <!-- lets make another section  -->

  <section class="product-item-sec">
    <div class="container">
      <h2 class="title text-center">Produk Kerajinan Tangan Teratas</h2>

      <div class="row mt-5 align-items-center">
        <div class="col-lg-4">
          <div class="product-timer">
            <img src="@/assets/img/banner kerajinan.png" alt="" />

            <div class="product-time">
              <div class="pr-time-text">
                <h4 class="text-white">Sisa Waktu Diskon Minggu ini!</h4>
              </div>

              <div class="timer-flex">
                <ul>
                  <li id="days1">0<span>HARI</span></li>
                  <li id="hours1">0<span>JAM</span></li>
                  <li id="minutes1">0<span>MENIT</span></li>
                  <li id="seconds1">0<span>DETIK</span></li>
                </ul>
              </div>

              <p class="text-white mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, molestiae!
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-8">
          <!-- first add row -->
          <div class="row">
            <div class="col-md-4">
              <div class="product-box">
                <div class="pr-icons">
                  <ul>
                    <li>
                      <a href=""><i class="fa-solid fa-user"></i></a>
                    </li>
                    <li>
                      <a href=""><i class="fa-solid fa-heart"></i></a>
                    </li>
                    <li>
                      <a href=""><i class="fa-solid fa-eye"></i></a>
                    </li>
                  </ul>
                </div>

                <div class="pr-img">
                  <img src="@/assets/img/Keramik.png" alt="" />
                </div>

                <div class="pr-text">
                  <h6>Stok tersedia</h6>
                  <h5>Keramik</h5>
                  <span class="price">Mulai dari Rp 25.000</span>
                  <div class="cart-btn">
                    <a href="">Tambahkan ke keranjang <i class="fa-solid fa-cart-shopping"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="product-box">
                <div class="pr-icons">
                  <ul>
                    <li>
                      <a href=""><i class="fa-solid fa-user"></i></a>
                    </li>
                    <li>
                      <a href=""><i class="fa-solid fa-heart"></i></a>
                    </li>
                    <li>
                      <a href=""><i class="fa-solid fa-eye"></i></a>
                    </li>
                  </ul>
                </div>

                <div class="pr-img">
                  <img src="@/assets/img/Tenun.png" alt="" />
                </div>

                <div class="pr-text">
                  <h6>Stok tersedia</h6>
                  <h5>Tenun</h5>
                  <span class="price">Mulai dari Rp 25.000</span>
                  <div class="cart-btn">
                    <a href="">Tambahkan ke keranjang <i class="fa-solid fa-cart-shopping"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="product-box">
                <div class="pr-icons">
                  <ul>
                    <li>
                      <a href=""><i class="fa-solid fa-user"></i></a>
                    </li>
                    <li>
                      <a href=""><i class="fa-solid fa-heart"></i></a>
                    </li>
                    <li>
                      <a href=""><i class="fa-solid fa-eye"></i></a>
                    </li>
                  </ul>
                </div>

                <div class="pr-img">
                  <img src="@/assets/img/Ukiran.png" alt="" />
                </div>

                <div class="pr-text">
                  <h6>Stok tersedia</h6>
                  <h5>Ukiran</h5>
                  <span class="price">Mulai dari Rp 25.000</span>
                  <div class="cart-btn">
                    <a href="">Tambahkan ke keranjang <i class="fa-solid fa-cart-shopping"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- lets make weekends section  -->

  <section class="weekend-sec py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="weekend-main" style="{ backgroundImage: `url(${})` }">
            <div class="weekend-text">
              <h5>Diskon 40% hanya untuk akhir pekan ini</h5>
              <h3>Hanya untuk 100 kuota</h3>
              <div class="nav-btn mt-4"><a href="">Dapatkan Sekarang</a></div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="weekend-main" style="{ backgroundImage: `url(${})` }">
            <div class="weekend-text">
              <h5>Diskon 50% Untuk Umkm Kuliner</h5>
              <h3>Jajanan Pasar</h3>
              <div class="nav-btn mt-4"><a href="">Dapatkan Sekarang</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- lets make a Full Product lists showing in 2 -rows  -->

  <!-- copy the above products and pasted here just changing the look n feel img text as per choices  -->

  <section class="product-sec pb-5">
    <div class="container">
      <h2 class="title text-center">
        Buah dan Sayuran Segar <br />
        Telur dan Ayam Berkualitas
      </h2>

      <!-- adding the timser here too  -->

      <div class="row mt-5">
        <div class="col-lg-4">
          <div class="product-timer">
            <img src="@/assets/img/banner agrikultur.png" alt="" />

            <div class="product-time">
              <div class="pr-time-text">
                <h4 class="text-white">Diskon berlaku Hingga</h4>
              </div>

              <div class="timer-flex">
                <ul>
                  <li id="days2">0<span>HARI</span></li>
                  <li id="hours2">0<span>JAM</span></li>
                  <li id="minutes2">0<span>MENIT</span></li>
                  <li id="seconds2">0<span>DETIK</span></li>
                </ul>
              </div>
              <p class="text-white mt-2"></p>
            </div>
          </div>
        </div>

        <div class="col-lg-8">
          <div class="product-slider-2 mt-5">
            <div class="col-md-3">
              <div class="product-box">
                <div class="pr-icons">
                  <ul>
                    <li>
                      <a href=""><i class="fa-solid fa-user"></i></a>
                    </li>
                    <li>
                      <a href=""><i class="fa-solid fa-heart"></i></a>
                    </li>
                    <li>
                      <a href=""><i class="fa-solid fa-eye"></i></a>
                    </li>
                  </ul>
                </div>

                <div class="pr-img">
                  <img src="@/assets/img/buah sayur.png" alt="" />
                </div>

                <div class="pr-text">
                  <h6>Stok Tersedia</h6>
                  <h5>Buah dan Sayuran Segar</h5>
                  <span class="price">Mulai dari Rp.1000</span>
                  <div class="cart-btn">
                    <a href="">Tambahkan ke Keranjang<i class="fa-solid fa-cart-shopping"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="product-box">
                <div class="pr-icons">
                  <ul>
                    <li>
                      <a href=""><i class="fa-solid fa-user"></i></a>
                    </li>
                    <li>
                      <a href=""><i class="fa-solid fa-heart"></i></a>
                    </li>
                    <li>
                      <a href=""><i class="fa-solid fa-eye"></i></a>
                    </li>
                  </ul>
                </div>

                <div class="pr-img">
                  <img src="@/assets/img/telur.png" alt="" />
                </div>

                <div class="pr-text">
                  <h6>Stok Tersedia</h6>
                  <h5>Telur</h5>
                  <span class="price">Rp. 2000/butir</span>
                  <div class="cart-btn">
                    <a href="">Tambahkan ke Keranjang<i class="fa-solid fa-cart-shopping"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="product-box">
                <div class="pr-icons">
                  <ul>
                    <li>
                      <a href=""><i class="fa-solid fa-user"></i></a>
                    </li>
                    <li>
                      <a href=""><i class="fa-solid fa-heart"></i></a>
                    </li>
                    <li>
                      <a href=""><i class="fa-solid fa-eye"></i></a>
                    </li>
                  </ul>
                </div>

                <div class="pr-img">
                  <img src="@/assets/img/ayam.png" alt="" />
                </div>

                <div class="pr-text">
                  <h6>Stok Tersedia</h6>
                  <h5>Ayam</h5>
                  <span class="price">Rp. 25.000/kilo</span>
                  <div class="cart-btn">
                    <a href="">Tambahkan ke Keranjang <i class="fa-solid fa-cart-shopping"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <!-- <div class="col-md-3">
                            <div class="product-box">

                                <div class="pr-icons">
                                    <ul>
                                        <li><a href=""><i class="fa-solid fa-user"></i></a></li>
                                        <li><a href=""><i class="fa-solid fa-heart"></i></a></li>
                                        <li><a href=""><i class="fa-solid fa-eye"></i></a></li>
                                    </ul>
                                </div>

                                <div class="pr-img">
                                    <img src="" alt="">
                                </div>

                                <div class="pr-text">
                                    <h6>In Stock</h6>
                                    <h5>Milk</h5>
                                    <span class="price">$22.00</span>
                                    <div class="cart-btn"><a href="">Add to cart <i
                                                class="fa-solid fa-cart-shopping"></i></a></div>
                                </div>

                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="product-box">

                                <div class="pr-icons">
                                    <ul>
                                        <li><a href=""><i class="fa-solid fa-user"></i></a></li>
                                        <li><a href=""><i class="fa-solid fa-heart"></i></a></li>
                                        <li><a href=""><i class="fa-solid fa-eye"></i></a></li>
                                    </ul>
                                </div>

                                <div class="pr-img">
                                    <img src="" alt="">
                                </div>

                                <div class="pr-text">
                                    <h6>In Stock</h6>
                                    <h5>Lime</h5>
                                    <span class="price">$22.00</span>
                                    <div class="cart-btn"><a href="">Add to cart <i
                                                class="fa-solid fa-cart-shopping"></i></a></div>
                                </div>

                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="product-box">

                                <div class="pr-icons">
                                    <ul>
                                        <li><a href=""><i class="fa-solid fa-user"></i></a></li>
                                        <li><a href=""><i class="fa-solid fa-heart"></i></a></li>
                                        <li><a href=""><i class="fa-solid fa-eye"></i></a></li>
                                    </ul>
                                </div>

                                <div class="pr-img">
                                    <img src="" alt="">
                                </div>

                                <div class="pr-text">
                                    <h6>In Stock</h6>
                                    <h5>Onion</h5>
                                    <span class="price">$22.00</span>
                                    <div class="cart-btn"><a href="">Add to cart <i
                                                class="fa-solid fa-cart-shopping"></i></a></div>
                                </div>

                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="product-box">

                                <div class="pr-icons">
                                    <ul>
                                        <li><a href=""><i class="fa-solid fa-user"></i></a></li>
                                        <li><a href=""><i class="fa-solid fa-heart"></i></a></li>
                                        <li><a href=""><i class="fa-solid fa-eye"></i></a></li>
                                    </ul>
                                </div>

                                <div class="pr-img">
                                    <img src="" alt="">
                                </div>

                                <div class="pr-text">
                                    <h6>In Stock</h6>
                                    <h5>Broccli</h5>
                                    <span class="price">$22.00</span>
                                    <div class="cart-btn"><a href="">Add to cart <i
                                                class="fa-solid fa-cart-shopping"></i></a></div>
                                </div>

                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="product-box">

                                <div class="pr-icons">
                                    <ul>
                                        <li><a href=""><i class="fa-solid fa-user"></i></a></li>
                                        <li><a href=""><i class="fa-solid fa-heart"></i></a></li>
                                        <li><a href=""><i class="fa-solid fa-eye"></i></a></li>
                                    </ul>
                                </div>

                                <div class="pr-img">
                                    <img src="" alt="">
                                </div>

                                <div class="pr-text">
                                    <h6>In Stock</h6>
                                    <h5>Capsicum</h5>
                                    <span class="price">$22.00</span>
                                    <div class="cart-btn"><a href="">Add to cart <i
                                                class="fa-solid fa-cart-shopping"></i></a></div>
                                </div>

                            </div>
                        </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- lets make another section  -->

  <section class="featured-sec py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="featured-flex">
            <i class="fa-solid fa-box"></i>
            <p>Setiap hari tersedia produk segar</p>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="featured-flex">
            <i class="fa-solid fa-truck"></i>
            <p>Pengiriman Gratis*</p>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="featured-flex">
            <i class="fa-solid fa-percent"></i>
            <p>Harga Terbaik di Pasar</p>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="featured-flex">
            <i class="fa-solid fa-box"></i>
            <p>UMKM Pesantren terpercaya</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- lets make a bg sec  -->

  <section class="bg-sec mt-5" :style="{ backgroundImage: `url(${bannerbawah})` }">
    <div class="container">
      <div class="row">
        <div class="col-lg-6"></div>
        <div class="col-lg-6">
          <div class="bg-text">
            <h3>Dukung UMKM , Majukan Pesantren , Berkah Bersama !</h3>
            <p>
              Produk UMKM pesantren hadir dengan kualitas terbaik dari tangan para santri. Setiap
              pembelian bukan hanya mendukung perekonomian lokal, tetapi juga menjadi bagian dari
              perjuangan memajukan pendidikan dan kemandirian pesantren.
            </p>
            <p>
              Mari wujudkan keberkahan bersama dengan memilih produk asli karya santri. Bersama,
              kita bisa memperkuat ekonomi umat sekaligus menebar manfaat.
            </p>
            <div class="nav-btn mt-4">
              <a href="">Belanja Sekarang</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- lets make blog section  -->

  <section class="blog-sec py-5">
    <div class="container">
      <h2 class="title text-center">Berita & Artikel</h2>

      <div class="row mt-5">
        <div class="col-md-4">
          <div class="blog-box">
            <div class="blog-img"><img src="@/assets/img/kemenag.jpg" alt="" /></div>
            <div class="blog-text">
              <h3>
                Bogor (Kemenag) --- Ikhtiar Kementerian Agama untuk menguatkan kemandirian pesantren
                terus dilakukan. Salah satunya, dengan menggelar pelatihan bagi usaha mikro, kecil,
                dan menengah (UMKM) pesantren.
              </h3>
              <div class="blog-arrow">
                <a
                  href="https://kemenag.go.id/nasional/perkuat-kemandirian-kemenag-kembali-latih-umkm-pesantren-ryrrsz"
                  >Baca Selengkapnya <i class="fa-solid fa-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="blog-box">
            <div class="blog-img"><img src="@/assets/img/umkm jatim.jpg" alt="" /></div>
            <div class="blog-text">
              <h3>
                Sebagai upaya memperkuat ketahanan pangan daerah sekaligus mendorong sinergi
                antarpemangku kepentingan dalam pengendalian inflasi, Kantor Perwakilan Bank
                Indonesia (BI) Provinsi Jawa Timur menggelar kegiatan Jelajah UMKM dan Pondok
                Pesantren 2025.
              </h3>
              <p>
                Kegiatan ini merupakan bagian dari program Sinergi Tangguh untuk Ketahanan Pangan
                Jawa Timur yang telah dicanangkan oleh BI Jatim bersama dengan Pemerintah Provinsi
                Jawa Timur dan berbagai pemangku kepentingan lainnya pada awal tahun 2025. Kegiatan
                ini berlangsung selama lima hari, mulai 11 hingga 15 Juni 2025, dengan fokus pada
                klaster pangan unggulan yang tersebar di berbagai wilayah Jawa Timur.
              </p>
              <div class="blog-arrow">
                <a
                  href="https://kominfo.jatimprov.go.id/berita/jelajah-umkm-dan-pesantren-2025-bi-bangun-sinergi-tangguh-untuk-ketahanan-pangan-jatim"
                  >Baca Selengkapnya <i class="fa-solid fa-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="blog-box">
            <div class="blog-img"><img src="@/assets/img/umkm yt.png" alt="" /></div>
            <div class="blog-text">
              <h3>[LIVE] Jelajah UMKM & Pondok Pesantren | Inspirasi Pagi tvOne</h3>
              <div class="blog-arrow">
                <a href="https://www.youtube.com/watch?v=vrUwzV_T_Hs"
                  >Lihat Selengkapnya <i class="fa-solid fa-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- lets make footer  -->

  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="footer-img">
            <img src="@/assets/img/Logo.png" alt="" />
            <p class="mt-2">
              Setiap belanja Anda di E-Lapak Pon-Tren bukan sekadar transaksi, tapi juga bagian dari
              ibadah.
            </p>

            <div class="footer-social">
              <ul>
                <li>
                  <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href=""><i class="fa-brands fa-instagram"></i></a>
                </li>
                <li>
                  <a href=""><i class="fa-brands fa-twitter"></i></a>
                </li>
                <li>
                  <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-lg-3">
          <div class="footer-links ps-5">
            <h4>Useful Links</h4>

            <ul>
              <li>
                <a href=""><i class="fa-solid fa-angle-right"></i>Home</a>
              </li>
              <li>
                <a href=""><i class="fa-solid fa-angle-right"></i>About</a>
              </li>
              <li>
                <a href=""><i class="fa-solid fa-angle-right"></i>Service</a>
              </li>
              <li>
                <a href=""><i class="fa-solid fa-angle-right"></i>Shop</a>
              </li>
              <li>
                <a href=""><i class="fa-solid fa-angle-right"></i>Products</a>
              </li>
              <li>
                <a href=""><i class="fa-solid fa-angle-right"></i>Categories</a>
              </li>
              <li>
                <a href=""><i class="fa-solid fa-angle-right"></i>Offers</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-3">
          <div class="footer-links">
            <h4>Customers</h4>

            <ul>
              <li>
                <a href=""><i class="fa-solid fa-angle-right"></i>Shippemnts</a>
              </li>
              <li>
                <a href=""><i class="fa-solid fa-angle-right"></i>Privacy</a>
              </li>
              <li>
                <a href=""><i class="fa-solid fa-angle-right"></i>Order</a>
              </li>
              <li>
                <a href=""><i class="fa-solid fa-angle-right"></i>Returen</a>
              </li>
              <li>
                <a href=""><i class="fa-solid fa-angle-right"></i>Policies</a>
              </li>
              <li>
                <a href=""><i class="fa-solid fa-angle-right"></i>Orders</a>
              </li>
              <li>
                <a href=""><i class="fa-solid fa-angle-right"></i>Offers</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-3">
          <div class="footer-cont">
            <h4 id="contact">Hubungi Kami</h4>

            <div class="footer-flex">
              <ul>
                <li>
                  <i class="fa-solid fa-envelope"></i>
                  <a href="">elapakpontren@gmail.com</a>
                </li>
                <li>
                  <i class="fa-solid fa-phone"></i>
                  <a href="">+62 812-3456-7890</a>
                </li>
                <li>
                  <i class="fa-solid fa-location-dot"></i>
                  <a href="">Kota Malang, Jawa Timur 65138</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="copyrights">
      <p class="m-0">Copyrights |UMKM PONPES.co.id| 2025 .</p>
    </div>
  </footer>
</template>

<script>
import tagline from '@/assets/img/tagline.png'
const bannerbawah = new URL('../assets/img/banner bawah.png', import.meta.url).href

export default {
  data() {
    return {
      tagline,
      bannerbawah,
      timer1Id: null,
      timer2Id: null,
      backToTopBtn: null,
      _onScroll: null,
      _onClickBackToTop: null,
      // ...
    }
  },
  mounted() {
    // ==================== COUNTDOWN TIMER 1 ====================
    const countdownDate1 = new Date('2025-09-11 23:59:59').getTime()
    this.timer1Id = setInterval(() => {
      const now = Date.now()
      const distance = countdownDate1 - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      const d1 = document.getElementById('days1')
      const h1 = document.getElementById('hours1')
      const m1 = document.getElementById('minutes1')
      const s1 = document.getElementById('seconds1')

      if (d1) d1.innerHTML = days + '<span>HARI</span>'
      if (h1) h1.innerHTML = hours + '<span>JAM</span>'
      if (m1) m1.innerHTML = minutes + '<span>MENIT</span>'
      if (s1) s1.innerHTML = seconds + '<span>DETIK</span>'

      if (distance < 0) {
        clearInterval(this.timer1Id)
        const tf0 = document.querySelectorAll('.timer-flex')[0]
        if (tf0) tf0.innerHTML = '<h3>Diskon Telah Berakhir!</h3>'
      }
    }, 1000)

    // ==================== COUNTDOWN TIMER 2 ====================
    const countdownDate2 = new Date('2025-09-10 12:00:00').getTime()
    this.timer2Id = setInterval(() => {
      const now = Date.now()
      const distance = countdownDate2 - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      const d2 = document.getElementById('days2')
      const h2 = document.getElementById('hours2')
      const m2 = document.getElementById('minutes2')
      const s2 = document.getElementById('seconds2')

      if (d2) d2.innerHTML = days + '<span>HARI</span>'
      if (h2) h2.innerHTML = hours + '<span>JAM</span>'
      if (m2) m2.innerHTML = minutes + '<span>MENIT</span>'
      if (s2) s2.innerHTML = seconds + '<span>DETIK</span>'

      if (distance < 0) {
        clearInterval(this.timer2Id)
        const tfList = document.querySelectorAll('.timer-flex')
        if (tfList && tfList[1]) tfList[1].innerHTML = '<h3>Diskon Telah Berakhir!</h3>'
      }
    }, 1000)

    // ==================== BACK TO TOP ====================
    this.backToTopBtn = document.getElementById('backToTop')
    if (this.backToTopBtn) {
      this._onScroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          this.backToTopBtn.style.display = 'block'
        } else {
          this.backToTopBtn.style.display = 'none'
        }
      }
      this._onClickBackToTop = () => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      }
      window.addEventListener('scroll', this._onScroll)
      this.backToTopBtn.addEventListener('click', this._onClickBackToTop)
    }
  },
  beforeUnmount() {
    if (this.timer1Id) clearInterval(this.timer1Id)
    if (this.timer2Id) clearInterval(this.timer2Id)

    if (this.backToTopBtn) {
      if (this._onScroll) window.removeEventListener('scroll', this._onScroll)
      if (this._onClickBackToTop)
        this.backToTopBtn.removeEventListener('click', this._onClickBackToTop)
    }
  },
}
</script>

<style scoped>
.banner-sec {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 360px;
  display: flex;
  align-items: center;
  color: #fff;
}
.banner-sec .container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 15px;
}
.header-main-text h1,
.header-main-text h5,
.header-main-text p {
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.45);
}

/* ===== new styles to align product cards ===== */
/* layout untuk kategori (img + h4) agar rapi dan simetris */
.item-slider {
  display: flex;
  justify-content: center;
  gap: 5px;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 24px;
}
.items-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  width: 160px; /* sesuaikan lebar tiap item */
}
.items-header img {
  width: 84px;
  height: 84px;
  object-fit: cover;
  border-radius: 50%;
  display: block;
}

/* product cards: pastikan gambar punya area tetap sehingga semua judul sejajar */
.product-slider {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
  align-items: start;
  margin-top: 1.5rem;
}

/* wrapper grid cell */
.col-md-3 {
  width: 100%;
}

/* card appearance and equal height */
.product-box {
  background: #fff;
  border-radius: 12px;
  padding: 22px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 480px; /* pastikan tinggi minimum agar teks sejajar */
  box-sizing: border-box;
}

/* area gambar dengan tinggi tetap */
.pr-img {
  width: 100%;
  height: 240px; /* area tetap untuk gambar */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 8px;
}
.pr-img img {
  max-height: 200px;
  width: auto;
  object-fit: contain;
  display: block;
}

/* pastikan teks berada di posisi sama */
.pr-text {
  text-align: center;
  margin-top: 6px;
  width: 100%;
  margin-top: auto; /* pindahkan teks ke bagian bawah card jika ingin konsisten */
}

/* price and stock styling */
.pr-text h6 {
  color: #2a9238;
  margin-bottom: 6px;
  font-weight: 600;
}
.pr-text h5 {
  margin: 6px 0 8px;
  font-size: 1.15rem;
}
.pr-text .price {
  display: block;
  color: #666;
  margin-bottom: 12px;
}

/* cart button */
.cart-btn a {
  display: inline-block;
  border: 1px solid #2a9238;
  color: #2a9238;
  padding: 10px 18px;
  border-radius: 28px;
  text-decoration: none;
  font-weight: 600;
}

/* timer styles */
.product-timer {
  position: relative; /* enable absolute positioning of .product-time */
}

/* position the time block centered over the banner image */
.product-time {
  position: absolute;
  top: 28px; /* distance from top of image - adjust to match screenshot */
  left: 50%;
  transform: translateX(-50%);
  width: 92%;
  max-width: 420px; /* keeps timer compact on wide screens */
  padding: 6px 12px;
  text-align: center;
  z-index: 2;
  pointer-events: none; /* allow clicks to pass through if needed */
}

/* timer container (the row with the little boxes) */
.timer-flex {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 12px auto 8px;
  pointer-events: auto; /* enable hover/click on timer items if needed */
}

/* reset list and layout */
.timer-flex ul {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
}

/* individual square boxes (number + label) */
.timer-flex ul li {
  background: #ffffff;
  color: #1f2d1f; /* dark green/black for numbers */
  min-width: 68px;
  padding: 14px 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

/* label under the number inside each box */
.timer-flex ul li span {
  display: block;
  margin-top: 8px;
  font-size: 11px;
  font-weight: 700;
  color: #4b4b4b;
  letter-spacing: 0.6px;
  text-transform: uppercase;
}

/* ensure the whole time block text above/below remains visible */
.product-time .pr-time-text h4 {
  margin: 0 0 6px;
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.45);
}

.m-0 {
  text-align: center;
}

.product-slider-2.mt-5.product-box {
  margin-top: 1rem;
  background: #fff;
  border-radius: 12px;
  padding: 22px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 480px; /* pastikan tinggi minimum agar teks sejajar */
  box-sizing: border-box;
}

/* responsive adjustments */
@media (max-width: 768px) {
  .product-time {
    top: 18px;
    max-width: 320px;
  }
  .timer-flex ul li {
    min-width: 56px;
    padding: 10px 8px;
  }
  .timer-flex ul li span {
    font-size: 10px;
    margin-top: 6px;
  }
}

.footer-social {
  text-align: center;
  padding: 12px 0;
  color: #ffffff;
  color-scheme: #ffffff;
}
.footer-links .ps-5 h4,
ul li a {
  padding-left: 5px;
  color: #f7f7f7;
}

/* responsive tweaks */
@media (max-width: 1200px) {
  .product-slider {
    grid-template-columns: repeat(3, 1fr);
  }
  .items-header {
    width: 120px;
  }
}
@media (max-width: 992px) {
  .product-slider {
    grid-template-columns: repeat(2, 1fr);
  }
  .items-header {
    width: 100px;
  }
}
@media (max-width: 768px) {
  .product-slider {
    gap: 18px;
    grid-template-columns: repeat(1, 1fr);
  }
}
/* New styles for horizontal alignment of product boxes next to countdown */
.product-slider-2 {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
}

.product-slider-2 > .col-md-3 {
  flex: 0 0 calc(33.333% - 20px);
  max-width: calc(33.333% - 20px);
  box-sizing: border-box;
}

@media (max-width: 992px) {
  .product-slider-2 > .col-md-3 {
    flex: 0 0 calc(50% - 20px);
    max-width: calc(50% - 20px);
  }
}

@media (max-width: 576px) {
  .product-slider-2 > .col-md-3 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
