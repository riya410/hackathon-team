<script>
        // Theme toggle functionality
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;

        themeToggle.addEventListener('click', () => {
            if (body.classList.contains('dark-mode')) {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
                themeToggle.textContent = '☀️';
            } else {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
                themeToggle.textContent = '🌙';
            }
        });

        // Modal functionality
        const modal = document.getElementById('info-modal');
        const patientModal = document.getElementById('patient-modal');
        const doctorModal = document.getElementById('doctor-modal');
        const closeButtons = document.querySelectorAll('.close-button');
        const modalTitle = document.getElementById('modal-title');
        const modalSubtitle = document.getElementById('modal-subtitle');
        const modalContent = document.getElementById('modal-content');

        // Portal modals
        const patientFeatureModal = document.getElementById('patient-feature-modal');
        const doctorFeatureModal = document.getElementById('doctor-feature-modal');
        const patientModalTitle = document.getElementById('patient-modal-title');
        const patientModalSubtitle = document.getElementById('patient-modal-subtitle');
        const patientModalContent = document.getElementById('patient-modal-content');
        const doctorModalTitle = document.getElementById('doctor-modal-title');
        const doctorModalSubtitle = document.getElementById('doctor-modal-subtitle');
        const doctorModalContent = document.getElementById('doctor-modal-content');

        // Chat functionality
        const chatToggle = document.getElementById('chat-toggle');
        const chatWindow = document.getElementById('chat-window');
        const chatClose = document.getElementById('chat-close');
        const chatForm = document.getElementById('chat-form');
        const chatInput = document.getElementById('chat-input');
        const chatContainer = document.getElementById('chat-container');
        const typingIndicator = document.getElementById('typing-indicator');

        // Mood tracking
        let selectedMood = '';
        const moodOptions = document.querySelectorAll('.mood-option');
        const selectedMoodInput = document.getElementById('selected-mood');
        const moodForm = document.getElementById('mood-form');
        const historyContainer = document.getElementById('history-container');

        // Application details data
        const appDetails = {
            paralysis: {
                title: "Paralysis Treatment",
                subtitle: "Restoring Mobility Through Neural Interfaces",
                content: "Our breakthrough neural interface technology allows patients with spinal cord injuries to regain control of prosthetic limbs. By directly connecting to the motor cortex, the system translates neural signals into precise prosthetic movements. Clinical trials have shown 95% accuracy in complex movement tasks, with patients reporting significant improvements in daily activities and quality of life."
            },
            vision: {
                title: "Vision Restoration",
                subtitle: "Bringing Sight to the Visually Impaired",
                content: "Through direct stimulation of the visual cortex, our technology bypasses damaged retinas to restore partial vision to blind patients. The system uses a camera feed processed through advanced AI algorithms to create neural stimulation patterns that the brain interprets as visual information. Early results show patients can recognize shapes, navigate environments, and even read large text."
            },
            hearing: {
                title: "Hearing Enhancement",
                subtitle: "Advanced Auditory Neural Stimulation",
                content: "For patients with severe hearing loss, our cochlear neural stimulation technology provides unprecedented auditory experiences. Unlike traditional hearing aids, our system directly stimulates the auditory nerve with precision patterns, allowing for clearer sound perception and the ability to distinguish between multiple sound sources in noisy environments."
            },
            epilepsy: {
                title: "Epilepsy Management",
                subtitle: "Real-Time Seizure Detection and Intervention",
                content: "Our neural monitoring system continuously tracks brain activity to predict and prevent seizures before they occur. When abnormal patterns are detected, the system delivers targeted electrical stimulation to interrupt seizure activity. This has reduced seizure frequency by 70% in clinical trials and given patients greater freedom and confidence in daily activities."
            },
            depression: {
                title: "Depression Therapy",
                subtitle: "Targeted Deep Brain Stimulation",
                content: "For patients with treatment-resistant depression, our deep brain stimulation technology targets specific neural circuits associated with mood regulation. The system provides personalized stimulation patterns based on individual brain activity, resulting in significant improvement in 85% of clinical trial participants with minimal side effects."
            },
            stroke: {
                title: "Stroke Rehabilitation",
                subtitle: "Accelerating Recovery Through Neuroplasticity",
                content: "Our brain training system enhances neuroplasticity to accelerate motor function recovery after stroke. By stimulating specific brain regions while patients perform rehabilitation exercises, we've seen recovery times reduced by 40% and improved long-term outcomes in clinical studies."
            },
            parkinsons: {
                title: "Parkinson's Treatment",
                subtitle: "Advanced Deep Brain Stimulation",
                content: "Our next-generation deep brain stimulation system provides personalized treatment for Parkinson's disease symptoms. The adaptive algorithm adjusts stimulation parameters in real-time based on patient movement patterns, reducing tremors by 90% and significantly improving motor control with fewer side effects than traditional DBS systems."
            }
        };

        // Patient portal feature details
        const patientFeatureDetails = {
            progress: {
                title: "Treatment Progress Tracking",
                subtitle: "Monitor Your Recovery Journey",
                content: "Our advanced analytics dashboard provides real-time insights into your treatment progress. View detailed graphs of your neural activity improvements, track therapy milestones, and compare your progress with similar cases. Our AI-powered system identifies patterns in your recovery and provides personalized recommendations to optimize your treatment plan."
            },
            appointments: {
                title: "Appointment Management",
                subtitle: "Seamless Scheduling and Coordination",
                content: "Schedule appointments with your medical team directly through the portal. Receive automated reminders, view upcoming sessions, and access virtual consultation links. Our system integrates with your healthcare provider's calendar to ensure optimal scheduling and reduce wait times. You can also request prescription refills and send secure messages to your care team."
            },
            resources: {
                title: "Educational Resources",
                subtitle: "Knowledge is Power in Your Recovery",
                content: "Access a comprehensive library of educational materials tailored to your specific condition. Our resources include interactive videos, downloadable guides, research papers, and FAQs. Content is regularly updated by our medical team to ensure you have the latest information about your treatment options and recovery strategies."
            },
            community: {
                title: "Support Community",
                subtitle: "Connect with Others on Similar Journeys",
                content: "Join our secure online community to connect with other patients experiencing similar conditions. Share experiences, ask questions, and receive emotional support from peers who understand your journey. Our community is moderated by medical professionals to ensure a safe and supportive environment for all members."
            },
            records: {
                title: "Health Records Management",
                subtitle: "Your Medical Information, Always Accessible",
                content: "Securely store and access all your medical records, test results, and treatment history in one place. Our encrypted system ensures your privacy while providing easy access to your healthcare information. Share specific records with specialists or family members with just a few clicks, and receive automatic updates when new information is added to your file."
            },
            notifications: {
                title: "Personalized Notifications",
                subtitle: "Stay Informed About Your Care",
                content: "Receive timely notifications about upcoming appointments, medication schedules, therapy reminders, and important updates about your treatment. Customize your notification preferences to receive alerts via email, SMS, or in-app messages. Our system also sends proactive health tips and wellness reminders based on your treatment plan."
            }
        };

        // Doctor portal feature details
        const doctorFeatureDetails = {
            "patient-data": {
                title: "Comprehensive Patient Data",
                subtitle: "Complete Medical Insights at Your Fingertips",
                content: "Access detailed patient profiles including medical history, treatment progress, neural activity data, and therapy outcomes. Our integrated system provides real-time updates and allows for easy comparison of patient data over time. Generate comprehensive reports for consultations and track population-level trends to improve treatment protocols."
            },
            diagnostics: {
                title: "Advanced Diagnostic Tools",
                subtitle: "Precision Analysis for Better Outcomes",
                content: "Utilize our suite of AI-enhanced diagnostic tools to analyze neural patterns, identify anomalies, and predict treatment responses. Our platform integrates with imaging systems and provides automated analysis of complex data sets. Collaborate with colleagues through shared diagnostic sessions and access expert consultations when needed."
            },
            collaboration: {
                title: "Global Research Collaboration",
                subtitle: "Connect with Experts Worldwide",
                content: "Join our network of medical professionals to share insights, participate in research studies, and access cutting-edge treatment protocols. Our collaboration platform includes secure messaging, shared workspaces, and real-time data analysis tools. Contribute to ongoing clinical trials and access aggregated anonymized data for research purposes."
            },
            monitoring: {
                title: "Real-Time Patient Monitoring",
                subtitle: "Continuous Care Beyond the Clinic",
                content: "Monitor patient progress remotely through our real-time data streaming system. Receive alerts for significant changes in neural activity, track therapy compliance, and adjust treatment parameters remotely. Our system provides predictive analytics to anticipate potential issues before they become critical."
            },
            trials: {
                title: "Clinical Trial Management",
                subtitle: "Advance Medical Research",
                content: "Access information about ongoing clinical trials and research opportunities. Our platform streamlines the trial enrollment process, tracks participant progress, and provides tools for data collection and analysis. Collaborate with research institutions and contribute to the advancement of neurological treatments."
            },
            updates: {
                title: "Research and Publication Updates",
                subtitle: "Stay Current with Medical Advances",
                content: "Receive personalized updates about the latest research findings, clinical guidelines, and publication opportunities in your field of interest. Our system curates relevant content from leading medical journals and research institutions. Participate in continuing education programs and access exclusive webinars with industry experts."
            }
        };

        // AI Responses
        const aiResponses = {
            greeting: [
                "Hello! How can I assist you today?",
                "Hi there! What can I help you with?",
                "Greetings! How may I support you?",
                "Hello! I'm here to help. What do you need?"
            ],
            howAreYou: [
                "I'm doing well, thank you for asking! How are you feeling today?",
                "I'm here and ready to help! How are you doing?",
                "I'm functioning optimally! How can I assist you?",
                "I'm great! How are you feeling today?"
            ],
            treatment: [
                "Your treatment plan is designed to maximize your recovery potential. Remember to follow your prescribed therapy sessions and report any changes to your medical team.",
                "Treatment progress varies for each individual. Stay consistent with your therapy and communicate regularly with your healthcare providers.",
                "Our neural interface technology is continuously adapting to your needs. Your feedback helps us optimize your treatment experience.",
                "Your treatment journey is unique. Focus on small improvements each day, and don't hesitate to reach out if you have concerns."
            ],
            appointment: [
                "To schedule an appointment, visit the Appointments section of your portal. You can also send a secure message to your care team.",
                "Your next appointment is scheduled for [date]. Remember to prepare any questions you'd like to discuss with your specialist.",
                "If you need to reschedule an appointment, please contact your healthcare provider directly through the portal messaging system.",
                "Virtual consultations are available for certain follow-ups. Check your appointment details for location and connection information."
            ],
            mood: [
                "Thank you for sharing your feelings. Tracking your mood helps us understand your progress and adjust your care plan as needed.",
                "It's normal to have ups and downs during recovery. Your feelings are valid, and support is always available.",
                "Your emotional well-being is just as important as your physical recovery. Consider reaching out to your support network.",
                "Expressing your feelings is a healthy part of the healing process. Would you like to talk more about what's on your mind?"
            ],
            resources: [
                "The Educational Resources section contains materials tailored to your condition. Check back regularly for new content.",
                "Our library includes videos, articles, and guides to help you understand your treatment and recovery process.",
                "If you have specific questions about your condition, the FAQ section might have the answers you're looking for.",
                "New research findings are added to our resources regularly. Stay informed about the latest developments in your treatment area."
            ],
            support: [
                "The Support Community is a safe space to connect with others on similar journeys. Sharing experiences can be very helpful.",
                "Peer support has been shown to improve recovery outcomes. Consider joining a discussion group in the community section.",
                "If you're feeling overwhelmed, remember that you're not alone. Reach out to your support network or care team.",
                "Connecting with others who understand your experience can provide valuable insights and encouragement."
            ],
            default: [
                "I'm here to help with any questions about your treatment, appointments, or general well-being. What would you like to know?",
                "Feel free to ask me anything about your care plan or recovery process. I'm here to support you.",
                "If you have concerns about your treatment or need information, I'm happy to help guide you in the right direction.",
                "Remember, I'm an AI assistant. For urgent medical concerns, please contact your healthcare provider directly."
            ]
        };

        // Navigation functionality
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = this.getAttribute('data-target');
                const section = document.getElementById(target);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Button event listeners
        document.getElementById('explore-btn').addEventListener('click', function() {
            document.getElementById('research').scrollIntoView({ behavior: 'smooth' });
        });

        document.getElementById('tech-details-btn').addEventListener('click', function() {
            modalTitle.textContent = "Technical Specifications";
            modalSubtitle.textContent = "Advanced Neural Interface Technology";
            modalContent.textContent = "Our neural interface features a 1024-channel microelectrode array with platinum-iridium contacts, each measuring 1.5mm in length and 50μm in diameter. The hermetically sealed titanium housing measures 25mm x 15mm x 5mm and weighs less than 5 grams. Wireless power transmission via inductive coupling provides up to 20mW of power, while data is transmitted at 100 Mbps through a proprietary RF protocol. The system operates on a custom neuromorphic processor capable of real-time signal processing with less than 5ms latency.";
            modal.style.display = 'flex';
        });

        document.getElementById('contact-btn').addEventListener('click', function() {
            modalTitle.textContent = "Contact Us";
            modalSubtitle.textContent = "Get in Touch with Our Medical Team";
            modalContent.textContent = "For research collaborations, clinical trials, or medical inquiries, please contact our team at: research@mindlink-medical.com or call +1 (555) 123-4567. Our medical advisory board is available for consultations Monday through Friday, 9AM to 5PM EST. For urgent medical matters, please contact your local emergency services first.";
            modal.style.display = 'flex';
        });

        // Signup buttons
        document.getElementById('patient-signup').addEventListener('click', function() {
            patientModal.style.display = 'flex';
        });

        document.getElementById('doctor-signup').addEventListener('click', function() {
            doctorModal.style.display = 'flex';
        });

        // Learn more buttons for user sections
        document.getElementById('patient-learn-more').addEventListener('click', function() {
            modalTitle.textContent = "Patient Portal";
            modalSubtitle.textContent = "Your Journey to Recovery";
            modalContent.textContent = "The Mind Link Patient Portal provides you with personalized access to cutting-edge neurological treatments. Track your therapy progress, communicate with your medical team, access educational resources about your condition, and connect with support communities. Our secure platform ensures your privacy while giving you the tools to take an active role in your treatment journey.";
            modal.style.display = 'flex';
        });

        document.getElementById('doctor-learn-more').addEventListener('click', function() {
            modalTitle.textContent = "Doctor Portal";
            modalSubtitle.textContent = "Advanced Tools for Medical Professionals";
            modalContent.textContent = "The Mind Link Doctor Portal gives medical professionals access to our advanced diagnostic tools, real-time patient monitoring, and collaborative research platforms. Access detailed patient data, utilize our AI-enhanced analysis tools, collaborate with specialists worldwide, and stay updated on the latest research developments. Our platform is designed to enhance your clinical decision-making and improve patient outcomes.";
            modal.style.display = 'flex';
        });

        // Learn more buttons for applications
        document.querySelectorAll('.learn-more').forEach(button => {
            button.addEventListener('click', function() {
                const app = this.getAttribute('data-app');
                const details = appDetails[app];
                
                if (details) {
                    modalTitle.textContent = details.title;
                    modalSubtitle.textContent = details.subtitle;
                    modalContent.textContent = details.content;
                    modal.style.display = 'flex';
                }
            });
        });

        // Close modals
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                modal.style.display = 'none';
                patientModal.style.display = 'none';
                doctorModal.style.display = 'none';
            });
        });

        // Close modals when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
            if (event.target === patientModal) {
                patientModal.style.display = 'none';
            }
            if (event.target === doctorModal) {
                doctorModal.style.display = 'none';
            }
            if (event.target === patientFeatureModal) {
                patientFeatureModal.style.display = 'none';
            }
            if (event.target === doctorFeatureModal) {
                doctorFeatureModal.style.display = 'none';
            }
        });

        // Form submissions
        document.getElementById('submit-patient').addEventListener('click', function() {
            const name = document.getElementById('patient-name').value;
            const email = document.getElementById('patient-email').value;
            const condition = document.getElementById('patient-condition').value;
            
            if (name && email && condition) {
                alert(`Welcome, ${name}! You have successfully logged into the Patient Portal.`);
                document.getElementById('main-content').style.display = 'none';
                document.getElementById('patient-portal').style.display = 'block';
                patientModal.style.display = 'none';
                document.getElementById('patient-form').reset();
                
                // Load mood history
                loadMoodHistory();
                
                // Show chat popup after login
                setTimeout(() => {
                    chatWindow.style.display = 'flex';
                }, 1000);
            } else {
                alert('Please fill in all required fields.');
            }
        });

        document.getElementById('submit-doctor').addEventListener('click', function() {
            const name = document.getElementById('doctor-name').value;
            const email = document.getElementById('doctor-email').value;
            const specialty = document.getElementById('doctor-specialty').value;
            
            if (name && email && specialty) {
                alert(`Welcome, Dr. ${name}! You have successfully logged into the Medical Professional Portal.`);
                document.getElementById('main-content').style.display = 'none';
                document.getElementById('doctor-portal').style.display = 'block';
                doctorModal.style.display = 'none';
                document.getElementById('doctor-form').reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });

        // Logout functionality
        document.getElementById('patient-logout').addEventListener('click', function() {
            document.getElementById('patient-portal').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
            chatWindow.style.display = 'none';
            alert('You have been logged out of the Patient Portal.');
        });

        document.getElementById('doctor-logout').addEventListener('click', function() {
            document.getElementById('doctor-portal').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
            alert('You have been logged out of the Medical Professional Portal.');
        });

        // Portal feature cards
        document.querySelectorAll('#patient-portal .portal-card').forEach(card => {
            card.addEventListener('click', function() {
                const feature = this.getAttribute('data-feature');
                const details = patientFeatureDetails[feature];
                
                if (details) {
                    patientModalTitle.textContent = details.title;
                    patientModalSubtitle.textContent = details.subtitle;
                    patientModalContent.textContent = details.content;
                    patientFeatureModal.style.display = 'flex';
                }
            });
        });

        document.querySelectorAll('#doctor-portal .portal-card').forEach(card => {
            card.addEventListener('click', function() {
                const feature = this.getAttribute('data-feature');
                const details = doctorFeatureDetails[feature];
                
                if (details) {
                    doctorModalTitle.textContent = details.title;
                    doctorModalSubtitle.textContent = details.subtitle;
                    doctorModalContent.textContent = details.content;
                    doctorFeatureModal.style.display = 'flex';
                }
            });
        });

        // Portal modal close buttons
        document.querySelectorAll('.portal-close-button').forEach(button => {
            button.addEventListener('click', function() {
                patientFeatureModal.style.display = 'none';
                doctorFeatureModal.style.display = 'none';
            });
        });

        // Portal modal back buttons
        document.getElementById('patient-modal-back').addEventListener('click', function() {
            patientFeatureModal.style.display = 'none';
        });

        document.getElementById('doctor-modal-back').addEventListener('click', function() {
            doctorFeatureModal.style.display = 'none';
        });

        // Mood tracking functionality
        moodOptions.forEach(option => {
            option.addEventListener('click', function() {
                // Remove selected class from all options
                moodOptions.forEach(opt => opt.classList.remove('selected'));
                
                // Add selected class to clicked option
                this.classList.add('selected');
                
                // Set selected mood value
                selectedMood = this.getAttribute('data-mood');
                selectedMoodInput.value = selectedMood;
            });
        });

        moodForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!selectedMood) {
                alert('Please select how you are feeling today.');
                return;
            }
            
            const thoughts = document.getElementById('thoughts').value;
            const date = new Date().toLocaleString();
            
            // Create mood entry
            const moodEntry = {
                date: date,
                mood: selectedMood,
                thoughts: thoughts
            };
            
            // Save to "local storage" (in this case, just in memory for demo)
            saveMoodEntry(moodEntry);
            
            // Reset form
            moodOptions.forEach(opt => opt.classList.remove('selected'));
            document.getElementById('thoughts').value = '';
            selectedMood = '';
            selectedMoodInput.value = '';
            
            alert('Thank you for sharing how you feel today! Your mood has been recorded.');
            
            // Reload mood history
            loadMoodHistory();
        });

        // Mood history functions
        let moodHistory = [];

        function saveMoodEntry(entry) {
            moodHistory.unshift(entry); // Add to beginning of array
            // Keep only last 10 entries
            if (moodHistory.length > 10) {
                moodHistory = moodHistory.slice(0, 10);
            }
        }

        function loadMoodHistory() {
            historyContainer.innerHTML = '';
            
            if (moodHistory.length === 0) {
                historyContainer.innerHTML = '<p>No mood entries yet. Share how you feel today!</p>';
                return;
            }
            
            moodHistory.forEach(entry => {
                const moodIcons = {
                    'excellent': '😊',
                    'good': '🙂',
                    'okay': '😐',
                    'poor': '🙁',
                    'bad': '😞'
                };
                
                const historyItem = document.createElement('div');
                historyItem.className = 'history-item';
                historyItem.innerHTML = `
                    <div class="history-date">${entry.date}
                        ${moodIcons[entry.mood]} Feeling ${entry.mood.charAt(0).toUpperCase() + entry.mood.slice(1)}

                    ${entry.thoughts ? `<div class="history-thoughts">${entry.thoughts}</div>` : ''}
                `;
                
                historyContainer.appendChild(historyItem);
            });
        }

        // AI Chat functionality
        chatToggle.addEventListener('click', function() {
            chatWindow.style.display = 'flex';
        });

        chatClose.addEventListener('click', function() {
            chatWindow.style.display = 'none';
        });

        chatForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const message = chatInput.value.trim();
            if (message) {
                // Add user message to chat
                addMessageToChat(message, 'user');
                
                // Clear input
                chatInput.value = '';
                
                // Show typing indicator
                typingIndicator.style.display = 'flex';
                chatContainer.scrollTop = chatContainer.scrollHeight;
                
                // Simulate AI thinking time
                setTimeout(() => {
                    // Hide typing indicator
                    typingIndicator.style.display = 'none';
                    
                    // Get AI response
                    const aiResponse = generateAIResponse(message);
                    
                    // Add AI response to chat
                    addMessageToChat(aiResponse, 'ai');
                }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
            }
        });

        function addMessageToChat(message, sender) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.classList.add(sender + '-message');
            messageElement.textContent = message;
            
            chatContainer.appendChild(messageElement);
            
            // Scroll to bottom
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }

        function generateAIResponse(userMessage) {
            const lowerMessage = userMessage.toLowerCase();
            
            // Check for specific keywords to provide relevant responses
            if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
                return aiResponses.greeting[Math.floor(Math.random() * aiResponses.greeting.length)];
            }
            
            if (lowerMessage.includes('how are you') || lowerMessage.includes('how do you feel')) {
                return aiResponses.howAreYou[Math.floor(Math.random() * aiResponses.howAreYou.length)];
            }
            
            if (lowerMessage.includes('treatment') || lowerMessage.includes('therapy') || lowerMessage.includes('recovery')) {
                return aiResponses.treatment[Math.floor(Math.random() * aiResponses.treatment.length)];
            }
            
            if (lowerMessage.includes('appointment') || lowerMessage.includes('schedule') || lowerMessage.includes('meeting')) {
                return aiResponses.appointment[Math.floor(Math.random() * aiResponses.appointment.length)];
            }
            
            if (lowerMessage.includes('feel') || lowerMessage.includes('mood') || lowerMessage.includes('sad') || lowerMessage.includes('happy') || lowerMessage.includes('angry')) {
                return aiResponses.mood[Math.floor(Math.random() * aiResponses.mood.length)];
            }
            
            if (lowerMessage.includes('resource') || lowerMessage.includes('learn') || lowerMessage.includes('information')) {
                return aiResponses.resources[Math.floor(Math.random() * aiResponses.resources.length)];
            }
            
            if (lowerMessage.includes('support') || lowerMessage.includes('community') || lowerMessage.includes('help')) {
                return aiResponses.support[Math.floor(Math.random() * aiResponses.support.length)];
            }
            
            // Default response if no keywords match
            return aiResponses.default[Math.floor(Math.random() * aiResponses.default.length)];
        }

        // Simple animation for feature cards on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const featureCards = document.querySelectorAll('.feature-card, .app-card, .user-section');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            featureCards.forEach(card => {
                card.style.opacity = 0;
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(card);
            });
        });
    </script>