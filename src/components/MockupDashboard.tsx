"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Trash2, 
  ShoppingBag, 
  Package, 
  Coffee, 
  AlertTriangle, 
  Layers, 
  TrendingUp, 
  Clock,
  ArrowRight,
  Sparkles
} from "lucide-react";

interface MockupDashboardProps {
  industry: "laundry" | "fnb" | "toko-bangunan";
}

export default function MockupDashboard({ industry }: MockupDashboardProps) {
  return (
    <div className="w-full bg-canvas border border-hairline rounded-xl shadow-elevated overflow-hidden text-body-sm text-ink-secondary">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-hairline bg-canvas-soft select-none">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-sticker-pink opacity-80" />
          <div className="w-3 h-3 rounded-full bg-sticker-orange opacity-80" />
          <div className="w-3 h-3 rounded-full bg-sticker-teal opacity-80" />
        </div>
        <div className="text-[12px] font-medium text-ink-muted">
          lancarpos.app/dashboard/{industry}
        </div>
        <div className="w-12" /> {/* Spacer */}
      </div>

      {/* Main Container - 5 columns for extra content space */}
      <div className="grid grid-cols-1 md:grid-cols-5 min-h-[420px] bg-canvas">
        {/* Mock Sidebar */}
        <div className="md:col-span-1 border-r border-hairline bg-canvas-soft/40 p-4 flex flex-col justify-between select-none">
          <div className="space-y-6">
            <div className="flex items-center gap-2 px-1">
              <div className="w-6.5 h-6.5 rounded-md bg-primary flex items-center justify-center text-white font-black text-[12px] shadow-soft shrink-0">
                LP
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-ink leading-none text-[13px] truncate">LancarPos</h4>
                <span className="text-[9px] text-ink-faint font-semibold uppercase tracking-wider block mt-0.5">
                  {industry === "laundry" ? "Laundry" : industry === "fnb" ? "F&B" : "Retail"}
                </span>
              </div>
            </div>

            <nav className="space-y-1">
              <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-canvas font-semibold text-primary shadow-soft text-[12px] cursor-pointer">
                <Layers className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Transaksi</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] text-ink-muted hover:bg-canvas-soft hover:text-ink transition-notion cursor-pointer">
                <Package className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Stok Barang</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] text-ink-muted hover:bg-canvas-soft hover:text-ink transition-notion cursor-pointer">
                <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Laporan</span>
              </div>
            </nav>
          </div>

          <div className="pt-4 border-t border-hairline">
            <div className="flex items-center gap-2 px-0.5">
              <div className="w-6 h-6 rounded-full bg-sticker-purple text-sticker-purple-deep flex items-center justify-center font-bold text-[10px] shrink-0">
                O
              </div>
              <div className="leading-tight min-w-0">
                <p className="text-[11px] font-bold text-ink truncate">Owner POS</p>
                <p className="text-[9px] text-ink-faint truncate">Cabang Utama</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area - Takes 4/5 cols for maximum layout room */}
        <div className="md:col-span-4 p-5 flex flex-col justify-between relative bg-canvas overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={industry}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="flex-1 flex flex-col justify-between"
            >
              {industry === "laundry" && <LaundryInterface />}
              {industry === "fnb" && <FnBInterface />}
              {industry === "toko-bangunan" && <TokoBangunanInterface />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* 1. LAUNDRY INTERFACE */
function LaundryInterface() {
  const [orders, setOrders] = React.useState([
    { id: "TRX-001", name: "Budi Santoso", weight: "4.5 Kg", type: "Cuci Setrika", status: "proses", time: "1 Jam lagi" },
    { id: "TRX-002", name: "Siti Rahma", weight: "2.0 Kg", type: "Bedcover Large", status: "selesai", time: "Selesai" },
    { id: "TRX-003", name: "Ahmad Yani", weight: "5.2 Kg", type: "Setrika Saja", status: "diambil", time: "Kemarin" },
  ]);

  const updateStatus = (id: string, current: string) => {
    setOrders(orders.map(order => {
      if (order.id === id) {
        let nextStatus = "proses";
        let nextTime = "1 Jam lagi";
        if (current === "proses") {
          nextStatus = "selesai";
          nextTime = "Selesai";
        } else if (current === "selesai") {
          nextStatus = "diambil";
          nextTime = "Baru saja";
        } else {
          nextStatus = "proses";
          nextTime = "2 Jam lagi";
        }
        return { ...order, status: nextStatus, time: nextTime };
      }
      return order;
    }));
  };

  return (
    <div className="space-y-4 flex-grow flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-3.5">
          <div>
            <h3 className="font-bold text-ink text-title tracking-tight">Status Order Laundry</h3>
            <p className="text-[12px] text-ink-muted">Pantau tahapan cuci, setrika, sampai diambil pelanggan</p>
          </div>
          <span className="text-[10px] font-bold text-sticker-purple bg-sticker-purple/10 px-2 py-0.5 rounded-full border border-sticker-purple/20 flex items-center gap-1 animate-pulse select-none">
            <Sparkles className="w-3 h-3" /> Live Monitor
          </span>
        </div>

        <div className="space-y-2">
          {orders.map((order) => (
            <div 
              key={order.id} 
              className="flex items-center justify-between p-3 bg-canvas border border-hairline rounded-lg shadow-soft hover:border-primary/30 transition-notion cursor-pointer select-none"
              onClick={() => updateStatus(order.id, order.status)}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-full bg-sticker-purple/10 flex items-center justify-center text-sticker-purple-deep shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-ink text-[13px] truncate">{order.name}</span>
                    <span className="text-[10px] text-ink-faint font-mono bg-canvas-soft px-1 rounded shrink-0">{order.id}</span>
                  </div>
                  <div className="text-[11px] text-ink-muted flex gap-2 divide-x divide-hairline mt-0.5">
                    <span className="truncate">{order.type}</span>
                    <span className="pl-2 font-medium text-ink-secondary shrink-0">{order.weight}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 ml-2">
                <div className="text-right hidden sm:block">
                  <p className="text-[9px] text-ink-faint font-semibold uppercase tracking-wider">Estimasi</p>
                  <p className="text-[11px] text-ink-secondary font-medium">{order.time}</p>
                </div>
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                  order.status === "proses" 
                    ? "bg-sticker-orange/15 text-sticker-orange border-sticker-orange/20" 
                    : order.status === "selesai"
                    ? "bg-sticker-green/15 text-sticker-green border-sticker-green/20"
                    : "bg-hairline text-ink-muted border-hairline"
                }`}>
                  {order.status === "proses" ? "Proses" : order.status === "selesai" ? "Siap Diambil" : "Selesai"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-[11px] text-ink-faint text-center italic mt-4 select-none">
        💡 Tips: Klik kartu order untuk memperbarui status alur cuci.
      </p>
    </div>
  );
}

/* 2. F&B INTERFACE */
interface FoodItem {
  id: number;
  name: string;
  price: number;
  category: "makanan" | "minuman" | "snack";
  emoji: string;
}

function FnBInterface() {
  const [activeCategory, setActiveCategory] = React.useState<"makanan" | "minuman" | "snack">("makanan");
  const [cart, setCart] = React.useState<{ item: FoodItem; qty: number }[]>([]);
  const [isDineIn, setIsDineIn] = React.useState(true);

  const menuItems: FoodItem[] = [
    { id: 1, name: "Nasi Goreng Spesial", price: 25000, category: "makanan", emoji: "🍛" },
    { id: 2, name: "Mie Ayam Pangsit", price: 18000, category: "makanan", emoji: "🍜" },
    { id: 3, name: "Ayam Bakar Madu", price: 28000, category: "makanan", emoji: "🍗" },
    { id: 4, name: "Es Teh Manis Jumbo", price: 5000, category: "minuman", emoji: "🥤" },
    { id: 5, name: "Kopi Susu Aren", price: 15000, category: "minuman", emoji: "☕" },
    { id: 6, name: "Soda Gembira", price: 12000, category: "minuman", emoji: "🍹" },
    { id: 7, name: "Kentang Goreng", price: 14000, category: "snack", emoji: "🍟" },
    { id: 8, name: "Pisang Goreng Keju", price: 12000, category: "snack", emoji: "🍌" },
  ];

  const addToCart = (item: FoodItem) => {
    const existing = cart.find(c => c.item.id === item.id);
    if (existing) {
      setCart(cart.map(c => c.item.id === item.id ? { ...c, qty: c.qty + 1 } : c));
    } else {
      setCart([...cart, { item, qty: 1 }]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(c => c.item.id !== id));
  };

  const total = cart.reduce((sum, c) => sum + (c.item.price * c.qty), 0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-grow h-full items-stretch">
      {/* Menu Area - 7 cols out of 12 for wide grid */}
      <div className="lg:col-span-7 flex flex-col justify-between h-full min-h-[300px]">
        <div>
          {/* Categories Tab */}
          <div className="flex gap-1 border-b border-hairline pb-2 mb-3 select-none">
            {(["makanan", "minuman", "snack"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-md text-[12px] font-bold capitalize transition-notion cursor-pointer ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-soft"
                    : "text-ink-muted hover:bg-canvas-soft hover:text-ink-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Items List-Cards Grid: Horizontal layout ensures no truncation */}
          <div className="grid grid-cols-2 gap-2">
            {menuItems.filter(item => item.category === activeCategory).map(item => (
              <div 
                key={item.id}
                onClick={() => addToCart(item)}
                className="p-2.5 bg-canvas border border-hairline rounded-lg text-left shadow-soft hover:border-primary active:scale-98 transition-notion cursor-pointer flex items-center gap-2.5 min-w-0"
              >
                <span className="text-[20px] shrink-0 select-none">{item.emoji}</span>
                <div className="min-w-0 flex-1 leading-tight">
                  <h5 className="font-bold text-ink text-[12px] truncate">{item.name}</h5>
                  <p className="text-[11px] text-primary font-semibold mt-0.5">Rp {item.price.toLocaleString("id-ID")}</p>
                </div>
                <Plus className="w-3.5 h-3.5 text-ink-faint shrink-0 ml-auto" />
              </div>
            ))}
          </div>
        </div>

        <p className="text-[10px] text-ink-faint italic mt-3 select-none">
          💡 Klik menu item di atas untuk memasukkan ke ringkasan pesanan kasir.
        </p>
      </div>

      {/* Cart Drawer Panel - 5 cols for extra wide billing */}
      <div className="lg:col-span-5 border border-hairline rounded-xl p-3 bg-canvas-soft/30 flex flex-col justify-between h-full min-h-[300px]">
        <div>
          <div className="flex items-center justify-between border-b border-hairline pb-2 mb-2.5">
            <h4 className="font-bold text-ink text-[12px] flex items-center gap-1 shrink-0 select-none">
              <ShoppingBag className="w-4 h-4 text-primary" /> Pesanan
            </h4>
            
            {/* Dine In Toggle - Pill shaped buttons */}
            <div className="flex border border-hairline rounded-full bg-canvas p-0.5 overflow-hidden shrink-0 select-none">
              <button 
                onClick={() => setIsDineIn(true)}
                className={`px-2 py-0.5 rounded-full text-[9px] font-bold transition-notion cursor-pointer ${isDineIn ? "bg-primary text-white" : "text-ink-muted hover:bg-canvas-soft"}`}
              >
                Dine In
              </button>
              <button 
                onClick={() => setIsDineIn(false)}
                className={`px-2 py-0.5 rounded-full text-[9px] font-bold transition-notion cursor-pointer ${!isDineIn ? "bg-primary text-white" : "text-ink-muted hover:bg-canvas-soft"}`}
              >
                Takeaway
              </button>
            </div>
          </div>

          {/* Cart List */}
          <div className="space-y-2 max-h-[170px] overflow-y-auto pr-1">
            {cart.length === 0 ? (
              <div className="py-10 text-center text-ink-faint text-[11px] flex flex-col items-center gap-1.5 select-none">
                <Coffee className="w-7 h-7 text-ink-faint opacity-40" />
                Belum ada pesanan kasir
              </div>
            ) : (
              cart.map(c => (
                <div key={c.item.id} className="flex items-center justify-between text-[11px]">
                  <div className="truncate flex-1 pr-2 min-w-0">
                    <span className="font-bold text-primary mr-1">{c.qty}x</span>
                    <span className="text-ink font-medium">{c.item.name}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 ml-1">
                    <span className="font-bold text-ink-secondary">Rp {(c.item.price * c.qty).toLocaleString("id-ID")}</span>
                    <button 
                      onClick={() => removeFromCart(c.item.id)}
                      className="text-ink-faint hover:text-sticker-pink p-0.5 rounded hover:bg-canvas transition-notion cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Total and Checkout */}
        <div className="border-t border-hairline pt-2.5 mt-3.5 space-y-2 shrink-0">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-semibold text-ink-muted">Total Bayar:</span>
            <span className="text-[13px] font-bold text-primary">Rp {total.toLocaleString("id-ID")}</span>
          </div>
          <button 
            disabled={cart.length === 0}
            className={`w-full py-2 rounded-lg text-[11px] font-bold text-center flex items-center justify-center gap-1 transition-notion shadow-soft ${
              cart.length > 0 
                ? "bg-primary text-white hover:bg-primary-active active:scale-98 cursor-pointer" 
                : "bg-hairline text-ink-faint cursor-not-allowed"
            }`}
          >
            Bayar Transaksi <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* 3. TOKO BANGUNAN INTERFACE */
function TokoBangunanInterface() {
  const [items, setItems] = React.useState([
    { id: "PROD-201", name: "Semen Tiga Roda 40kg", stock: 12, unit: "Sak", priceRetail: 62000, priceBulk: 59500, status: "normal" },
    { id: "PROD-202", name: "Besi Beton Polos 10mm", stock: 4, unit: "Batang", priceRetail: 78000, priceBulk: 75000, status: "low" },
    { id: "PROD-203", name: "Pipa PVC Wavin 3 Inch", stock: 35, unit: "Unit", priceRetail: 43000, priceBulk: 40500, status: "normal" },
  ]);

  const restockItem = (id: string) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, stock: item.stock + 50, status: "normal" };
      }
      return item;
    }));
  };

  return (
    <div className="space-y-4 flex-grow flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-3.5">
          <div>
            <h3 className="font-bold text-ink text-title tracking-tight">Katalog & Stok Material</h3>
            <p className="text-[12px] text-ink-muted">Kelola harga eceran, grosir (borongan) serta warning stok limit</p>
          </div>
        </div>

        {/* Table representation */}
        <div className="border border-hairline rounded-lg overflow-hidden shadow-soft bg-canvas">
          <div className="grid grid-cols-12 bg-canvas-soft border-b border-hairline px-3 py-2 text-[10px] font-bold text-ink-muted uppercase tracking-wider text-left select-none">
            <div className="col-span-5 md:col-span-6">Nama Barang</div>
            <div className="col-span-3 text-center">Stok</div>
            <div className="col-span-2 text-right">Eceran</div>
            <div className="col-span-2 text-right hidden md:block">Grosir</div>
          </div>

          <div className="divide-y divide-hairline">
            {items.map((item) => (
              <div 
                key={item.id} 
                className="grid grid-cols-12 px-3 py-2.5 items-center hover:bg-canvas-soft/10 transition-notion text-left"
              >
                <div className="col-span-5 md:col-span-6 pr-2 min-w-0">
                  <p className="font-bold text-ink text-[12px] truncate">{item.name}</p>
                  <p className="text-[9px] text-ink-faint font-mono mt-0.5">{item.id}</p>
                </div>
                
                <div className="col-span-3 text-center">
                  <div className="flex flex-col items-center">
                    <span className={`font-bold px-1.5 py-0.5 rounded text-[11px] ${
                      item.status === "low" 
                        ? "bg-sticker-pink/15 text-sticker-pink animate-pulse" 
                        : "text-ink-secondary bg-canvas-soft/50"
                    }`}>
                      {item.stock} {item.unit}
                    </span>
                    {item.status === "low" && (
                      <span className="text-[9px] text-sticker-orange font-semibold flex items-center gap-0.5 mt-0.5 select-none">
                        <AlertTriangle className="w-2.5 h-2.5" /> Menipis
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-span-2 text-right font-bold text-ink-secondary text-[11px]">
                  Rp {item.priceRetail.toLocaleString("id-ID")}
                </div>

                <div className="col-span-2 text-right font-bold text-primary text-[11px] hidden md:block">
                  Rp {item.priceBulk.toLocaleString("id-ID")}
                </div>
                
                {/* Mobile action overlay if stok menipis */}
                {item.status === "low" && (
                  <div className="col-span-12 mt-2 pt-2 border-t border-hairline/50 flex justify-end">
                    <button 
                      onClick={() => restockItem(item.id)}
                      className="px-2.5 py-1 bg-sticker-green text-white text-[10px] font-bold rounded flex items-center gap-1 shadow-soft cursor-pointer hover:bg-sticker-green/90 transition-notion"
                    >
                      <Plus className="w-3 h-3" /> Restock 50 {item.unit}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-[11px] text-ink-faint text-center italic mt-4 select-none">
        💡 Demo: Klik tombol &ldquo;Restock&rdquo; pada produk yang memiliki status stok &ldquo;Menipis&rdquo; untuk melakukan simulasi restock.
      </p>
    </div>
  );
}
