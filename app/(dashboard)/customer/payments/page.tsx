import React from "react";
import { CreditCard, Download, ArrowUpRight, ArrowDownRight, Wallet, Eye, TrendingUp } from "lucide-react";
import { PaymentTable } from "@/app/components/dashboard/payment-table";
import { StatCard } from "@/app/components/dashboard/stat-card";
import { payments } from "@/lib/dashboard-mock-data";

export default function PaymentsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Payments & Wallet</h1>
          <p className="text-sm text-neutral-500 mt-1">Manage your payment methods and transaction history.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors">
            <Wallet className="w-4 h-4" /> Fund Wallet
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Wallet Balance */}
        <WalletCard />

        {/* Saved Cards */}
        <div className="bg-white rounded-[32px] border border-border p-6 -md:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-foreground">Payment Methods</h3>
            <button className="text-sm font-medium text-primary hover:text-primary-600 transition-colors">Add New</button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 border border-primary/20 bg-primary-50/50 rounded-xl flex items-center justify-between group cursor-pointer transition-colors hover:bg-primary-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-6 bg-blue-900 rounded-[2px] flex items-center justify-center text-[8px] text-white font-bold tracking-widest italic shrink-0">VISA</div>
                <div>
                  <p className="text-sm font-medium text-foreground">•••• 4242</p>
                  <p className="text-xs text-neutral-500">Expires 12/28</p>
                </div>
              </div>
              <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Default</span>
            </div>

            <div className="p-4 border border-border bg-white rounded-xl flex items-center justify-between group cursor-pointer transition-colors hover:border-neutral-300 hover:bg-neutral-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-6 bg-red-500 rounded-[2px] flex items-center justify-center text-[8px] text-white font-bold shrink-0 relative overflow-hidden">
                  <div className="absolute w-4 h-4 rounded-full bg-orange-400 left-1.5 opacity-80 mix-blend-multiply"></div>
                  <div className="absolute w-4 h-4 rounded-full bg-yellow-400 right-1.5 opacity-80 mix-blend-multiply"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">•••• 5555</p>
                  <p className="text-xs text-neutral-500">Expires 08/27</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-foreground">Transaction History</h2>
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-neutral-600 hover:text-foreground transition-colors border border-border rounded-lg bg-white">
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>

        <PaymentTable payments={payments} />
      </div>
    </div>
  );
}

function WalletCard() {
  return (
    <div className="relative overflow-hidden rounded-[32px] p-6 text-white shadow-xl lg:shadow-none">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, #06363A 0%, #095256 35%, #087F8C 72%, #5AAA95 100%)",
        }}
      />

      {/* Soft Glow */}
      <div className="absolute -right-24 -top-20 h-80 w-80 rounded-full bg-[#5AAA95]/20 blur-3xl" />

      {/* Diagonal Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -right-40 top-0 h-[2px] w-[600px] rotate-[35deg] bg-white/40" />
        <div className="absolute -right-24 top-24 h-[2px] w-[600px] rotate-[35deg] bg-white/30" />
        <div className="absolute -right-8 top-48 h-[2px] w-[600px] rotate-[35deg] bg-white/20" />
      </div>

      {/* Decorative Wallet */}
      <Wallet
        size={180}
        strokeWidth={1}
        className="absolute bottom-8 right-10 text-white/8"
      />

      <div className="relative z-10 flex flex-col gap-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
              <Wallet size={28} />
            </div>

            <h2 className="text-2xl font-semibold tracking-tight">
              Wallet Balance
            </h2>
          </div>

          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition hover:bg-white/20">
            <Eye size={22} />
          </button>
        </div>

        {/* Balance */}
        <div>
          <p className="text-lg text-white/70">Available Balance</p>

          <h1 className="mt-2 text-2xl font-bold tracking-tight md:text-4xl">
            ₦256,780.50
          </h1>
        </div>

        {/* Bottom Badge */}
        <div className="inline-flex w-fit items-center gap-3 rounded-full bg-white/10 px-3 py-3 backdrop-blur-md">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5">
            <TrendingUp />
          </div>

          <p className="text-md">
            <span className="font-semibold text-[#7FFFD4]">+12.4%</span>
            <span className="ml-1 text-white/80">from last month</span>
          </p>
        </div>
      </div>
    </div>
  );
}