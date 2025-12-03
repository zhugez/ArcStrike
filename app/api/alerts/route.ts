import { NextResponse } from 'next/server';

const mockAlerts = [
    {
        id: 'ALT-2024-001',
        title: 'Suspicious Process Chain Detected',
        severity: 'critical',
        host: 'HOST-FIN-02',
        time: '2 mins ago',
        status: 'active',
        mitre: ['T1059', 'T1105', 'T1060'],
        details: {
            description: 'Detected a suspicious spawn chain originating from Office application, leading to PowerShell execution and network connection.',
            process_chain: ['WINWORD.EXE', 'cmd.exe', 'powershell.exe', 'rundll32.exe'],
            network: '192.168.1.105 -> 45.33.22.11 (evil-c2.xyz)'
        }
    },
    {
        id: 'ALT-2024-002',
        title: 'Unusual Network Connection',
        severity: 'warning',
        host: 'HOST-DEV-09',
        time: '45 mins ago',
        status: 'investigating',
        mitre: ['T1071'],
        details: {
            description: 'Outbound connection to uncommon port 4444 detected.',
            process: 'nc.exe',
            network: '10.0.0.5 -> 185.22.1.1:4444'
        }
    }
];

export async function GET() {
    return NextResponse.json(mockAlerts);
}
