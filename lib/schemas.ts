import { z } from 'zod';

export const ScanResultSchema = z.object({
    id: z.string(),
    status: z.string(),
    verdict: z.string(),
    score: z.number(),
    family: z.string().optional(),
    features: z.object({
        static: z.string(),
        behavior: z.string(),
        network: z.string(),
    }),
    timestamp: z.string(),
});

export type ScanResult = z.infer<typeof ScanResultSchema>;

export const AlertSchema = z.object({
    id: z.string(),
    title: z.string(),
    severity: z.enum(['critical', 'high', 'medium', 'low', 'warning', 'info']),
    host: z.string(),
    time: z.string(),
    status: z.string(),
    mitre: z.array(z.string()),
    details: z.object({
        description: z.string().optional(),
        process_chain: z.array(z.string()).optional(),
        network: z.string().optional(),
    }).optional(),
});

export type Alert = z.infer<typeof AlertSchema>;
