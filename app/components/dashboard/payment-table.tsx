"use client";

import React from "react";
import { Badge } from "@/app/components/ui/badge";
import { Download, FileText, MoreHorizontal } from "lucide-react";
import type { DashboardPayment } from "@/lib/dashboard-mock-data";

interface PaymentTableProps {
  payments: DashboardPayment[];
}

export function PaymentTable({ payments }: PaymentTableProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-border bg-white shadow-sm">
      <table className="w-full text-left text-sm whitespace-nowrap">
        <thead className="bg-neutral-50/50 border-b border-border text-neutral-500 font-medium">
          <tr>
            <th className="px-6 py-4">Invoice ID</th>
            <th className="px-6 py-4">Description</th>
            <th className="px-6 py-4">Artisan</th>
            <th className="px-6 py-4">Date</th>
            <th className="px-6 py-4">Amount</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {payments.length === 0 ? (
            <tr>
              <td colSpan={7} className="px-6 py-12 text-center text-neutral-500">
                No payment history found
              </td>
            </tr>
          ) : (
            payments.map((payment) => (
              <tr key={payment.id} className="hover:bg-neutral-50/50 transition-colors">
                <td className="px-6 py-4 font-medium text-foreground">
                  {payment.invoiceId}
                </td>
                <td className="px-6 py-4 text-neutral-700">{payment.description}</td>
                <td className="px-6 py-4 text-neutral-700">{payment.artisan}</td>
                <td className="px-6 py-4 text-neutral-500">{payment.date}</td>
                <td className="px-6 py-4 font-semibold text-foreground">
                  {formatCurrency(payment.amount)}
                </td>
                <td className="px-6 py-4">
                  <Badge
                    variant={
                      payment.status === "completed"
                        ? "success"
                        : payment.status === "pending"
                        ? "warning"
                        : payment.status === "refunded"
                        ? "default"
                        : "danger"
                    }
                  >
                    {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-neutral-400 hover:text-primary transition-colors rounded-[var(--radius-md)] hover:bg-primary-50">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-neutral-400 hover:text-primary transition-colors rounded-[var(--radius-md)] hover:bg-primary-50">
                      <FileText className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
