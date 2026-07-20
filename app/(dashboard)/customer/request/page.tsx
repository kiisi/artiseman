"use client";

import React, { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Search, MapPin, Calendar, Clock, Image as ImageIcon, Camera, Info } from "lucide-react";

export default function CreateRequestPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-fade-in pb-12">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Create Service Request</h1>
        <p className="text-sm text-neutral-500 mt-1">Tell us what you need help with and we'll connect you with the right artisan.</p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between relative mb-8">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-neutral-100 rounded-full z-0"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full z-0 transition-all duration-300" style={{ width: `${((step - 1) / 2) * 100}%` }}></div>

        {['Service Details', 'Schedule & Location', 'Review'].map((label, i) => (
          <div key={label} className="relative z-10 flex flex-col items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${step > i + 1 ? 'bg-primary border-primary text-white' :
                step === i + 1 ? 'bg-white border-primary text-primary' :
                  'bg-white border-neutral-200 text-neutral-400'
              }`}>
              {step > i + 1 ? '✓' : i + 1}
            </div>
            <span className={`text-xs font-medium ${step >= i + 1 ? 'text-foreground' : 'text-neutral-400'}`}>{label}</span>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[var(--radius-xl)] border border-border p-6 md:p-8 shadow-sm">
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-lg font-bold text-foreground mb-4">Service Details</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">What do you need help with?</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="e.g. Leaking pipe, AC repair, House painting"
                    className="w-full h-11 pl-10 pr-4 text-sm bg-white border border-border rounded-[var(--radius-md)] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Category</label>
                <select className="w-full h-11 px-3 text-sm bg-white border border-border rounded-[var(--radius-md)] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none text-neutral-700">
                  <option value="">Select a category</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electrical">Electrical</option>
                  <option value="cleaning">Cleaning</option>
                  <option value="carpentry">Carpentry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Describe the problem</label>
                <textarea
                  placeholder="Please provide as much detail as possible to help the artisan understand the scope of work..."
                  className="w-full p-3 text-sm bg-white border border-border rounded-[var(--radius-md)] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none min-h-[120px]"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Photos (Optional)</label>
                <div className="border-2 border-dashed border-border rounded-[var(--radius-lg)] p-8 text-center hover:bg-neutral-50 transition-colors cursor-pointer group">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Camera className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">Click to upload or drag and drop</p>
                  <p className="text-xs text-neutral-400 mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <Button onClick={() => setStep(2)}>Continue to Schedule</Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-lg font-bold text-foreground mb-4">Schedule & Location</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">When do you need this done?</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Today', 'Tomorrow', 'This Week', 'Specific Date'].map((time, i) => (
                    <button key={time} className={`px-4 py-3 rounded-[var(--radius-md)] border text-sm font-medium transition-colors ${i === 0 ? 'bg-primary-50 border-primary text-primary' : 'bg-white border-border text-neutral-600 hover:border-primary/50'
                      }`}>
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <input
                      type="date"
                      className="w-full h-11 pl-10 pr-4 text-sm bg-white border border-border rounded-[var(--radius-md)] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-neutral-700"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Time Preference</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <select className="w-full h-11 pl-10 pr-4 text-sm bg-white border border-border rounded-[var(--radius-md)] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none text-neutral-700">
                      <option>Morning (8AM - 12PM)</option>
                      <option>Afternoon (12PM - 4PM)</option>
                      <option>Evening (4PM - 8PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              <hr className="border-border" />

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Service Location</label>
                <div className="relative mb-3">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                  <input
                    type="text"
                    defaultValue="12 Akin Adesola St, Lekki"
                    className="w-full h-11 pl-10 pr-4 text-sm bg-white border border-border rounded-[var(--radius-md)] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
                <div className="h-[150px] bg-neutral-100 rounded-[var(--radius-md)] border border-border flex items-center justify-center relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `linear-gradient(to right, var(--color-primary) 1px, transparent 1px), linear-gradient(to bottom, var(--color-primary) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}
                  />
                  <div className="bg-white p-2 rounded-full shadow-md z-10 text-danger border border-danger/20">
                    <MapPin className="w-5 h-5 fill-current" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
              <Button onClick={() => setStep(3)}>Review Request</Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-lg font-bold text-foreground mb-4">Review Request</h2>

            <div className="bg-neutral-50 rounded-[var(--radius-lg)] p-5 border border-border space-y-4">
              <div>
                <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">Service Required</p>
                <p className="font-semibold text-foreground">Kitchen Sink Repair (Plumbing)</p>
                <p className="text-sm text-neutral-600 mt-1">The pipe under the sink is leaking heavily and needs replacement.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">Schedule</p>
                  <p className="text-sm font-medium text-foreground flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" /> Today
                  </p>
                  <p className="text-sm font-medium text-foreground flex items-center gap-1.5 mt-1">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" /> Morning (8AM - 12PM)
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-sm font-medium text-foreground flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" /> 12 Akin Adesola St, Lekki
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-primary-50 text-primary-900 rounded-[var(--radius-lg)] text-sm">
              <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p>Once submitted, this request will be sent to matched artisans in your area. You will receive quotes and estimates within 15 minutes.</p>
            </div>

            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={() => setStep(2)}>Edit Details</Button>
              <Button onClick={() => window.location.href = '/dashboard/customer'}>Submit Request</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
