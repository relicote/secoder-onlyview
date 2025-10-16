'use server';

/**
 * @fileOverview Simulates phishing attacks using GenAI to create realistic scenarios and provide personalized training recommendations.
 *
 * - simulatePhishingAttack - A function that generates a phishing scenario and provides training recommendations.
 * - SimulatePhishingAttackInput - The input type for the simulatePhishingAttack function.
 * - SimulatePhishingAttackOutput - The return type for the simulatePhishingAttack function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SimulatePhishingAttackInputSchema = z.object({
  employeeRole: z
    .string()
    .describe('The role of the employee being targeted (e.g., accountant, HR manager).'),
  companyIndustry: z.string().describe('The industry of the company (e.g., finance, healthcare).'),
  recentCompanyNews: z
    .string()
    .describe('Any recent news or events related to the company that could be used in the phishing attack.'),
});
export type SimulatePhishingAttackInput = z.infer<typeof SimulatePhishingAttackInputSchema>;

const SimulatePhishingAttackOutputSchema = z.object({
  phishingEmailSubject: z.string().describe('The subject line of the phishing email.'),
  phishingEmailBody: z.string().describe('The body of the phishing email.'),
  riskLevel: z.string().describe('The estimated risk level of the phishing attack (low, medium, high).'),
  trainingRecommendations: z.string().describe('Personalized training recommendations for the employee.'),
});
export type SimulatePhishingAttackOutput = z.infer<typeof SimulatePhishingAttackOutputSchema>;

export async function simulatePhishingAttack(
  input: SimulatePhishingAttackInput
): Promise<SimulatePhishingAttackOutput> {
  return simulatePhishingAttackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'simulatePhishingAttackPrompt',
  input: {schema: SimulatePhishingAttackInputSchema},
  output: {schema: SimulatePhishingAttackOutputSchema},
  prompt: `You are an expert cybersecurity consultant specializing in social engineering and phishing simulations.

You will generate a realistic phishing email scenario tailored to the employee's role, company industry, and recent company news.

The goal is to create a scenario that is believable and likely to trick the employee, but not malicious or harmful.

Based on the scenario, you will also provide personalized training recommendations to help the employee improve their ability to recognize and avoid phishing attacks.

Employee Role: {{{employeeRole}}}
Company Industry: {{{companyIndustry}}}
Recent Company News: {{{recentCompanyNews}}}

Output the phishing email subject, body, estimated risk level (low, medium, high), and personalized training recommendations.

Subject: {{phishingEmailSubject}}
Body: {{phishingEmailBody}}
Risk Level: {{riskLevel}}
Training Recommendations: {{trainingRecommendations}}`,
});

const simulatePhishingAttackFlow = ai.defineFlow(
  {
    name: 'simulatePhishingAttackFlow',
    inputSchema: SimulatePhishingAttackInputSchema,
    outputSchema: SimulatePhishingAttackOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
