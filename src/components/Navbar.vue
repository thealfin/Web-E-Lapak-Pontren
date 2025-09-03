<template>
  <nav class="navbar" :class="{ compact }">
    <div class="navbar-top">
      <div class="logo-brand">
        <img src="@/assets/img/Logo.png" alt="Logo" />
      </div>

      <div class="search-container">
        <form>
          <input type="text" class="search-input" placeholder="Search" />
          <button class="search-action" type="button"><i class="fas fa-microphone"></i></button>
          <button class="search-action" type="button"><i class="fas fa-camera"></i></button>
          <button class="search-btn" type="button"><i class="fas fa-search"></i></button>
        </form>
      </div>

      <div class="navbar-icons">
        <ul>
          <li>
            <a href="#"><i class="fas fa-user"></i></a>
          </li>
          <li>
            <a href="#"><i class="fas fa-heart"></i></a>
          </li>
          <li>
            <a href="#"><i class="fas fa-shopping-cart"></i></a>
          </li>
        </ul>
      </div>
    </div>

    <div ref="navMenu" class="navbar-menu">
      <router-link :to="{ name: 'Beranda' }" class="nav-link" active-class="active"
        >Home</router-link
      >
      <router-link to="/pembelian" class="nav-link">Pembelian</router-link>
      <router-link to="/produk" class="nav-link">Produk</router-link>
      <router-link to="/kedatangan" class="nav-link">Kedatangan</router-link>
      <router-link to="/blog" class="nav-link">Blog</router-link>
      <router-link to="/penawaran" class="nav-link">Penawaran</router-link>
      <router-link to="/tentangkami" class="nav-link">Tentang Kami</router-link>
      <router-link to="/hubungi" class="nav-link">Hubungi Kami</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false,
      compact: false,
      _scrollHandler: null,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    onScroll() {
      const y = window.scrollY || window.pageYOffset
      const threshold = 120
      const next = y > threshold
      if (next !== this.compact) {
        this.compact = next
        // optional: set body class so fixed menu won't overlap content
        if (this.compact) document.body.classList.add('nav-compact')
        else document.body.classList.remove('nav-compact')
      }
    },
  },
  mounted() {
    this._scrollHandler = () => window.requestAnimationFrame(this.onScroll)
    window.addEventListener('scroll', this._scrollHandler, { passive: true })
    // set initial state (reload not at top)
    this.onScroll()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this._scrollHandler)
    document.body.classList.remove('nav-compact')
  },
}
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navbar-icons ul {
  list-style: none;
  display: flex;
  gap: 16px;
  padding: 0;
  margin: 0;
}
.navbar-icons ul li a {
  color: #ffffff;
  background-color: #3bb54a;
  font-size: 18px;
  border-radius: 20px;
  text-decoration: none;
  transition: color 0.22s ease;
}
/* .navbar-icons ul li a i {
  font-size: 18px;
  color: #3bb54a;
} */
.navbar-icons ul li a:hover {
  color: #dcdcdc;
  background-color: #36a443;
}

.navbar-top {
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  box-sizing: border-box;
  transition:
    max-height 0.22s ease,
    opacity 0.22s ease;
}
.navbar.compact .navbar-top {
  max-height: 0;
  opacity: 0;
  pointer-events: none;
  padding: 0 16px;
}
.logo-brand img {
  height: 46px;
  object-fit: contain;
  display: block;
}

/* Search: pill with #d0e7d8 and white-ish icon circles (#fff9f9) */
.search-container {
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  box-sizing: border-box;
}

.search-container form {
  display: flex;
  align-items: center;
  width: 70%;
  max-width: 720px; /* adjust as needed */
  background: #d0e7d8; /* pill color */
  border-radius: 36px;
  padding: 8px 12px;
  gap: 10px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
}

/* input uses dark green text for contrast */
.search-input {
  border: 0;
  background: transparent;
  outline: none;
  padding: 10px 12px;
  color: #11411d;
  font-size: 16px;
  flex: 1 1 auto;
  min-width: 80px;
}

/* placeholder color */
.search-input::placeholder {
  color: rgba(17, 65, 29, 0.55);
}

/* small circular action icons next to input (microphone, camera) */
.search-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #fff9f9; /* light circle */
  color: #2a9238;
  border: 0;
  cursor: pointer;
  padding: 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
}

/* main search button: slightly larger circular icon */
.search-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #fff9f9; /* icon circle */
  color: #2a9238;
  border: 0;
  cursor: pointer;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
  padding: 0;
}

/* icon sizing */
.search-action i,
.search-btn i {
  font-size: 16px;
}

/* subtle hover */
.search-action:hover,
.search-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

/* responsive */
@media (max-width: 768px) {
  .search-container form {
    max-width: 520px;
    padding: 6px 10px;
  }
  .search-action {
    width: 32px;
    height: 32px;
  }
  .search-btn {
    width: 36px;
    height: 36px;
  }
  .search-action i,
  .search-btn i {
    font-size: 14px;
  }
}

.navbar-menu {
  width: 100%;
  max-width: 1200px;
  padding: 10px 16px;
  display: flex;
  justify-content: center;
  gap: 28px;
  box-sizing: border-box;
  transition: all 0.18s ease;
}
.nav-link {
  position: relative;
  text-decoration: none;
  color: #222;
  font-weight: 600;
  padding: 6px 8px;
}
.nav-link::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -8px;
  transform: translateX(-50%) scaleX(0);
  transform-origin: center;
  width: calc(100% - 12px);
  height: 3px;
  background: #3bb54a;
  border-radius: 3px;
  transition: transform 0.22s ease;
  opacity: 0.98;
}
.nav-link.active::after {
  transform: translateX(-50%) scaleX(1);
}
</style>
