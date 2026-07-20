import React from "react";
import { CreditCard, Download, ArrowUpRight, ArrowDownRight, Wallet } from "lucide-react";
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
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-[var(--radius-md)] text-sm font-medium hover:bg-primary-600 transition-colors shadow-sm">
            <Wallet className="w-4 h-4" /> Fund Wallet
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Wallet Balance */}
        <div className="bg-gradient-to-br from-primary to-primary-600 rounded-[var(--radius-xl)] p-6 text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
          <p className="text-primary-100 text-sm font-medium mb-1 relative z-10">Wallet Balance</p>
          <h2 className="text-4xl font-bold mb-4 relative z-10">₦45,000</h2>
          <div className="flex items-center gap-2 mt-4 relative z-10 text-sm font-medium text-primary-100">
            <span className="flex items-center gap-1"><ArrowDownRight className="w-4 h-4" /> In: ₦120k</span>
            <span className="flex items-center gap-1 ml-4"><ArrowUpRight className="w-4 h-4" /> Out: ₦75k</span>
          </div>
        </div>

        {/* Saved Cards */}
        <div className="bg-white rounded-[var(--radius-xl)] border border-border p-6 shadow-sm md:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-foreground">Payment Methods</h3>
            <button className="text-sm font-medium text-primary hover:text-primary-600 transition-colors">Add New</button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
