export interface Property {
  id: string;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  status: 'active' | 'pending' | 'sold' | 'draft';
  type: 'house' | 'condo' | 'townhouse' | 'land';
  image: string;
  dateAdded: Date;
  commission: number;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: 'buyer' | 'seller' | 'both';
  status: 'active' | 'inactive' | 'potential';
  lastContact: Date;
  totalValue: number;
  properties: string[];
}

export interface Transaction {
  id: string;
  propertyId: string;
  clientId: string;
  type: 'sale' | 'listing' | 'showing';
  amount: number;
  date: Date;
  status: 'completed' | 'pending' | 'cancelled';
}

export interface Analytics {
  totalSales: number;
  totalCommission: number;
  activeListings: number;
  monthlyRevenue: number[];
  salesByType: Record<string, number>;
  topPerformingProperties: Property[];
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  source: 'website' | 'referral' | 'social' | 'advertising' | 'walk-in' | 'other';
  status: 'new' | 'contacted' | 'qualified' | 'nurturing' | 'converted' | 'lost';
  interestedIn: 'buying' | 'selling' | 'renting' | 'investing';
  budget?: number;
  preferredLocation?: string;
  notes: string;
  assignedAgent?: string;
  createdAt: Date;
  lastContact?: Date;
  nextFollowUp?: Date;
}

export interface Document {
  id: string;
  name: string;
  type: 'contract' | 'listing' | 'disclosure' | 'inspection' | 'appraisal' | 'other';
  propertyId?: string;
  clientId?: string;
  url: string;
  uploadedAt: Date;
  uploadedBy: string;
  size: number;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  type: 'follow-up' | 'showing' | 'paperwork' | 'marketing' | 'other';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  dueDate: Date;
  assignedTo: string;
  propertyId?: string;
  clientId?: string;
  createdAt: Date;
  completedAt?: Date;
}

export interface MarketingCampaign {
  id: string;
  name: string;
  type: 'email' | 'social' | 'print' | 'online' | 'direct-mail';
  status: 'draft' | 'active' | 'paused' | 'completed';
  propertyIds: string[];
  targetAudience: string;
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  leads: number;
  startDate: Date;
  endDate?: Date;
}

export interface Appointment {
  id: string;
  title: string;
  type: 'showing' | 'listing' | 'consultation' | 'closing' | 'inspection' | 'other';
  propertyId?: string;
  clientId?: string;
  startTime: Date;
  endTime: Date;
  location: string;
  notes?: string;
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled' | 'no-show';
  attendees: string[];
}

export interface Commission {
  id: string;
  propertyId: string;
  clientId: string;
  salePrice: number;
  commissionRate: number;
  grossCommission: number;
  splits: {
    agent: number;
    brokerage: number;
    referral?: number;
  };
  netCommission: number;
  status: 'pending' | 'paid' | 'disputed';
  closingDate: Date;
  paidDate?: Date;
}