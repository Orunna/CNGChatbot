# Quick Start Guide - CNG AI Chatbot

## 🚀 Get Running in 5 Minutes

### Step 1: Get an API Key
1. Go to https://console.anthropic.com/
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new API key
5. Copy it (you'll need it in Step 3)

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Environment
```bash
# Copy the example env file
cp .env.example .env

# Edit .env and add your API key
# ANTHROPIC_API_KEY=sk-ant-your-actual-key-here
```

### Step 4: Start the Application
```bash
npm run dev
```

This starts both the backend server (port 3000) and frontend (port 5173).

### Step 5: Open in Browser
Navigate to: http://localhost:5173

You should see the Calgary Newcomers Guide chatbot interface!

---

## 💬 Try These Sample Questions

- "What employment services do you offer?"
- "Do you have ESL classes for beginners?"
- "How can you help me settle in Calgary?"
- "What programs are available for my teenage children?"
- "Can you help me find housing?"
- "Tell me about your community programs"

---

## 🔧 Troubleshooting

### "Failed to create conversation"
- Check that the backend server is running on port 3000
- Verify your ANTHROPIC_API_KEY is set correctly in .env

### "Cannot find module"
- Run `npm install` again
- Delete node_modules and package-lock.json, then reinstall

### Port already in use
- Change the port in vite.config.ts (frontend)
- Or change PORT in .env (backend)

### API Key Invalid
- Make sure you copied the entire key
- Check for extra spaces in the .env file
- Verify the key is active in Anthropic console

---

## 📝 Testing Checklist

- [ ] Send a message and receive a response
- [ ] Verify responses are relevant to CNG programs
- [ ] Test with multiple questions in a row
- [ ] Try questions about different program areas
- [ ] Check that the interface is responsive
- [ ] Verify streaming works (you see text appear gradually)

---

## 🎯 For Presenters/Demos

**Demo Script:**

1. **Introduction** (30 seconds)
   - "This is an AI chatbot prototype for Calgary Newcomers Guide"
   - "It helps newcomers learn about available programs and services"

2. **Feature Showcase** (2 minutes)
   - Ask about employment services
   - Ask about language programs
   - Show the streaming responses
   - Demonstrate multiple-turn conversation

3. **Technical Highlights** (1 minute)
   - Real-time AI responses using Claude
   - Clean, professional interface
   - Ready for Squarespace integration
   - Scalable architecture

4. **Next Steps** (30 seconds)
   - User testing planned
   - Integration roadmap
   - Future enhancements

**Pro Tips:**
- Have 3-4 preset questions ready
- Show the conversation flow naturally
- Highlight the real-time streaming
- Mention this is a working prototype

---

## 📚 Additional Resources

- Full documentation: See PROJECT_DOCUMENTATION.md
- Technical details: See README.md
- Code structure: Browse the /client and /server directories

---

**Need Help?**
- Check the troubleshooting section above
- Review the full README.md
- Consult PROJECT_DOCUMENTATION.md for detailed information
