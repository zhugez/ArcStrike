export interface OTXPulse {
    id: string;
    name: string;
    description: string;
    author_name: string;
    modified: string;
    created: string;
    tags: string[];
    references: string[];
    indicators?: OTXIndicator[];
}

export interface OTXIndicator {
    id: number;
    indicator: string;
    type: string;
    created: string;
    content: string;
    title: string;
    description: string;
}

const API_KEY = process.env.OTX_API_KEY || '4e53c477d83dabb2be4ff545422317fad9232b1382fb3d3cd5533b8ae7a1596e';

export class OTXService {
    private apiKey: string;
    private baseUrl: string = 'https://otx.alienvault.com/api/v1';

    constructor(apiKey?: string) {
        this.apiKey = apiKey || API_KEY;
    }

    private getHeaders() {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json'
        };
        if (this.apiKey) {
            headers['X-OTX-API-KEY'] = this.apiKey;
        }
        return headers;
    }

    async getPulses(limit: number = 10): Promise<OTXPulse[]> {
        try {
            const endpoint = this.apiKey 
                ? `${this.baseUrl}/pulses/subscribed?limit=${limit}`
                : `${this.baseUrl}/pulses/activity?limit=${limit}`;

            const response = await fetch(endpoint, {
                headers: this.getHeaders(),
                cache: 'no-store'
            });

            if (!response.ok) {
                console.error(`OTX API Error: ${response.status} ${response.statusText}`);
                return [];
            }

            const data = await response.json();
            return data.results || [];
        } catch (error) {
            console.error('Failed to fetch OTX pulses:', error);
            return [];
        }
    }

    async getPulseIndicators(pulseId: string): Promise<OTXIndicator[]> {
        try {
            const response = await fetch(`${this.baseUrl}/pulses/${pulseId}/indicators?limit=10`, {
                headers: this.getHeaders(),
                cache: 'no-store'
            });

            if (!response.ok) {
                console.error(`OTX API Error for pulse ${pulseId}: ${response.status}`);
                return [];
            }

            const data = await response.json();
            return data.results || [];
        } catch (error) {
            console.error(`Failed to fetch indicators for pulse ${pulseId}:`, error);
            return [];
        }
    }
}

export const otxService = new OTXService();
